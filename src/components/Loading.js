import React from "react";
import loadingGif from "../images/gif/Rolling.gif";

export default function Loading() {
    return (
        <div className='loading'>
            <h4>Chargement des salles</h4>
            <img src={loadingGif} alt=''></img>
        </div>
    );
}
