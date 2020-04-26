import React from "react";
import { RoomContext } from "../context";
import { useContext } from "react";
import Pagination from "@material-ui/lab/Pagination";

export default function RenderPages({ pages }) {
    const context = useContext(RoomContext);
    const { handlePagination, currentPage } = context;
    const renderPageNumbers = pages.map(number => {
        return (
            <div id={number} onClick={handlePagination}>
                <Pagination count={number} color='primary' />
            </div>
        );
    });
    return renderPageNumbers;
}
