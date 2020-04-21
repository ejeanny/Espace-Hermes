import React, { Component } from "react";
import Client from "./Contentful";

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        u: false,
        theater: false,
        class: false,
        square: false,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
    };

    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: "espaceHerms",
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <RoomContext.Provider
                value={{
                    ...this.state,
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
