import React, { Component } from "react";
import Client from "./Contentful";

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        currentPage: 1,
        roomPerPage: 12,
        lastSelected: "",
        loading: true,
        u: false,
        theater: false,
        classPosition: false,
        square: false,
        whiteBoard: false,
        wifi: false,
        handicap: false,
        paperBoard: false,
        location: "Toutes",
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        capacity: 1,
    };

    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: "espaceHerms",
                order: "-fields.price",
            });

            console.log(this.state.roomPerPage);
            let rooms = this.formatData(response.items);
            let featuredRooms = rooms.filter(room => room.featured === true);
            let maxPrice = Math.max(...rooms.map(item => item.price));
            let maxSize = Math.max(...rooms.map(item => item.theaterCapacity));
            this.setState({
                rooms,
                featuredRooms,
                sortedRooms: rooms,
                loading: false,
                price: maxPrice,
                maxPrice,
                maxSize,
            });
        } catch (error) {
            console.log(error);
        }
    };

    getRoom = slug => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    };

    // getPageRange = totalPageNumber => {
    //     const currentPage = this.state.currentPage;
    //     var minPageRange = currentPage - this.state.pageRange;
    //     var maxPageRange = currentPage + this.state.pageRange;
    //     if (minPageRange < 1) minPageRange = 1;
    //     if (maxPageRange > totalPageNumber) minPageRange = totalPageNumber;
    //     const pageNumbers = [];
    //     switch (true) {
    //         case currentPage > totalPageNumber:
    //             over = true;
    //             break;
    //         case maxPageRange > totalPageNumber:
    //             maxPageRange = totalPageNumber;
    //             minPageRange = maxPageRange - this.state.pageRange;
    //             break;
    //     }

    //     for (let i = minPageRange; i <= maxPageRange; i++) {
    //         pageNumbers.push(i);
    //     }
    //     //this.displayPageRange(pageNumbers, totalPage);
    //     return pageNumbers;
    // };

    componentDidMount() {
        if (
            window.matchMedia("(max-width: 1231px)").matches &&
            window.matchMedia("(min-width: 967px)").matches
        ) {
            this.setState({ roomPerPage: 9 });
        } else if (window.matchMedia("(max-width: 966px)").matches) {
            this.setState({ roomPerPage: 6 });
        }
        this.getData();
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = { ...item.fields, images, id };
            return room;
        });
        return tempItems;
    }

    handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value =
            target.type === "checkbox" ? target.checked : target.value;

        this.setState(
            {
                [name]: value,
            },
            this.filterRooms
        );
    };

    filterRooms = () => {
        let {
            rooms,
            capacity,
            classPosition,
            paperBoard,
            price,
            projector,
            square,
            theater,
            u,
            whiteBoard,
            wifi,
            handicap,
            location,
        } = this.state;
        //all the rooms
        let tempRooms = [...rooms];
        // console.log(location);
        if (location !== "Toutes") {
            tempRooms = tempRooms.filter(room => room.location === location);
        }

        //transform capacity value
        capacity = parseInt(capacity);

        //filter by price
        tempRooms = tempRooms.filter(room => room.price <= price);

        // filter by positioning & positioning capacity
        if (classPosition) {
            tempRooms = tempRooms.filter(room => room.classPosition === true);
            if (!theater) {
                tempRooms = tempRooms.filter(
                    room => room.classRoomCapacity >= capacity
                );
            }
        }
        if (square) {
            tempRooms = tempRooms.filter(room => room.square === true);
            if (!theater && !classPosition) {
                tempRooms = tempRooms.filter(
                    room => room.squareCapacity >= capacity
                );
            }
        }
        if (theater) {
            tempRooms = tempRooms.filter(room => room.theater === true);
            tempRooms = tempRooms.filter(
                room => room.theaterCapacity >= capacity
            );
        }
        if (u) {
            tempRooms = tempRooms.filter(room => room.u === true);
            if (!theater && !square && !classPosition) {
                tempRooms = tempRooms.filter(
                    room => room.uCapacity >= capacity
                );
            }
        }

        // if (!theater && !square && !classPosition && !u) {
        //     tempRooms = tempRooms.filter(
        //         room => room.theaterCapacity >= capacity
        //     );
        // }
        //filter by equipement
        if (whiteBoard) {
            tempRooms = tempRooms.filter(room => room.whiteBoard === true);
        }
        if (projector) {
            tempRooms = tempRooms.filter(room => room.projector === true);
        }
        if (paperBoard) {
            tempRooms = tempRooms.filter(room => room.paperBoard === true);
        }
        if (wifi) {
            tempRooms = tempRooms.filter(room => room.wifi === true);
        }
        if (handicap) {
            tempRooms = tempRooms.filter(room => room.handicap === true);
        }

        //change state
        this.setState({
            sortedRooms: tempRooms,
        });
    };

    toggleBox = () => {
        const { opened } = this.state;
        this.setState({
            opened: !opened,
        });
    };

    handleRadio = event => {
        const target = event.target;
        if (target.type === "radio") {
            const name = target.id;
            const value = target.checked;
            const lastSelected = this.state.lastSelected;

            if (lastSelected === "") {
                this.setState(
                    {
                        lastSelected: name,
                        [name]: value,
                    },
                    this.filterRooms
                );
            } else {
                this.setState(
                    {
                        [name]: value,
                        [lastSelected]: false,
                        lastSelected: name,
                    },
                    this.filterRooms
                );
            }
        } else {
            event.preventDefault();
            this.setState(
                {
                    u: false,
                    theater: false,
                    classPosition: false,
                    square: false,
                    lastSelected: "",
                },
                this.filterRooms
            );
        }
    };
    handlePagination = (event, value) => {
        this.setState({
            currentPage: value,
        });
    };

    render() {
        return (
            <RoomContext.Provider
                value={{
                    ...this.state,
                    getRoom: this.getRoom,
                    handleChange: this.handleChange,
                    // toggleBox: this.toggleBox,
                    // handleRadio: this.handleRadio,
                    handlePagination: this.handlePagination,
                    // getPageRange: this.getPageRange,
                }}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}
export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
            <RoomConsumer>
                {value => <Component {...props} context={value} />}
            </RoomConsumer>
        );
    };
}
const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };
