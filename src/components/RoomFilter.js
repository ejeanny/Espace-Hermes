import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
// import Checkbox from "react-native-modest-checkbox";
// /****** Image *******/
// import squareImg from "../images/square_disposition.svg";
// import classRoomImg from "../images/classroom_disposition.svg";
// import uImg from "../images/u_disposition.svg";
// import theaterImg from "../images/theater_disposition.svg";

const getUnique = (items, value) => {
    return [...new Set(items.map(items => items[value]))];
};

export default function RoomFilter({ rooms }) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        minPrice,
        maxPrice,
        name,
        description,
        surface,
        classPosition,
        classRoomCapacity,
        images,
        option,
        paperBoard,
        price,
        projector,
        square,
        squareCapacity,
        stare,
        theater,
        theaterCapacity,
        u,
        uCapacity,
        whiteBoard,
        wifi,
        handicap,
        location,
    } = context;

    //get unique location
    let locations = getUnique(rooms, "location");

    //add all location
    locations = ["all", ...locations];
    //map to JSX
    locations = locations.map((item, index) => {
        return (
            <option value={item} key={index}>
                {item}
            </option>
        );
    });

    return (
        <>
            <section className='filter-container'>
                <Title title='Rechercher une salle' />
                <form className='filter-form'>
                    {/* Select location */}
                    <div className='form-group'>
                        <label htmlFor='location'>Localisation</label>
                        <select
                            name='location'
                            id='location'
                            value={location}
                            className='form-control'
                            onChange={handleChange}>
                            {locations}
                        </select>
                    </div>
                    {/*End select type */}
                    {/*Room Price*/}
                    <div className='form-group'>
                        <label htmlFor='price'>room price ${price}</label>
                        <input
                            type='range'
                            name='price'
                            id='price'
                            min={minPrice}
                            max={maxPrice}
                            value={price}
                            onChange={handleChange}
                            className='form-control'></input>
                    </div>
                    {/*End Room Price*/}
                </form>
            </section>
        </>
    );
}
