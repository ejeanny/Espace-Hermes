import React from "react";

import { useContext } from "react";
import { RoomContext } from "../context";
import { FaAlignRight } from "react-icons/fa";

import FilterPostion from "./FilterPostion";

export default function MoreFilterComponent({ title }) {
    const context = useContext(RoomContext);
    const { toggleBox, opened } = context;

    if (opened) {
        title = "Fermer les filtres";
    } else {
        title = "Plus de filtre";
    }

    return (
        <div className='more-filter'>
            <div className='more-filter-title'>
                <p>{title}</p>
                <button
                    type='button'
                    className='border-none'
                    onClick={toggleBox}>
                    <FaAlignRight className='nav-icon-main'></FaAlignRight>
                </button>
            </div>
            {opened && (
                <div className='more-filter-content'>
                    <FilterPostion />
                </div>
            )}
        </div>
    );
}
