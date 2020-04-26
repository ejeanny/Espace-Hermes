import React from "react";
import Room from "./Room";
import { RoomContext } from "../context";
import { useContext } from "react";
import Pagination from "@material-ui/lab/Pagination";

export default function RoomList({ rooms }) {
    const context = useContext(RoomContext);
    const { roomPerPage, currentPage, handlePagination } = context;
    if (rooms.length === 0) {
        return (
            <div className='empty-search'>
                <h3>
                    Malheureusement Aucune Salles Ne Correspond À Vos Critères
                </h3>
            </div>
        );
    }

    //Logic for displaying current room
    const indexOfLastRooms = currentPage * roomPerPage;
    const indexOfFisrtRooms = indexOfLastRooms - roomPerPage;
    const currentRooms = rooms.slice(indexOfFisrtRooms, indexOfLastRooms);
    const renderRooms = currentRooms.map(item => {
        return <Room key={item.id} room={item}></Room>;
    });
    return (
        <>
            <section className='roomslist'>
                <div className='roomslist-center'>{renderRooms}</div>
                <div className='roomlist-page d-flex justify-content-center'>
                    <p>
                        {rooms.length}{" "}
                        {rooms.length === 1
                            ? "salle corresond"
                            : "salles correspondent"}{" "}
                        a votre recherche
                    </p>
                </div>
                <div className='d-flex justify-content-center'>
                    <Pagination
                        count={Math.ceil(rooms.length / roomPerPage)}
                        page={currentPage}
                        onChange={handlePagination}
                    />
                </div>
            </section>
        </>
    );
}
