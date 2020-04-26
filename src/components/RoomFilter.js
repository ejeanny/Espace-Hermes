import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
import MoreFilterComponent from "./MoreFilterComponent";
import DispositionFilterComponent from "./DispositionFilterComponent";

const getUnique = (items, value) => {
    return [...new Set(items.map(items => items[value]))];
};

export default function RoomFilter({ rooms }) {
    const context = useContext(RoomContext);
    const { handleChange, minPrice, maxPrice, price, location } = context;

    //get unique location
    let locations = getUnique(rooms, "location");

    //add all location
    locations = ["Toutes", ...locations];
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
                        <label htmlFor='price'>Prix{price} €</label>
                        <input
                            type='range'
                            name='price'
                            id='price'
                            min={minPrice}
                            max={maxPrice}
                            value={price}
                            onChange={handleChange}
                            className='form-control slider'></input>
                    </div>
                    {/*End Room Price*/}
                </form>
                <form className='filter-form'>
                    <DispositionFilterComponent />
                    <MoreFilterComponent />
                </form>
            </section>
        </>
    );
}
