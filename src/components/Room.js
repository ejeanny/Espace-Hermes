import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/salle_banner.jpg";
import Proptypes from "prop-types";

export default function Room({ room }) {
    const { name, slug, images, price } = room;
    return (
        <article className='room'>
            <div className='img-container-main'>
                <img src={images[0] || defaultImg} alt='single-room' />
                <div className='price-top'>
                    <h6>{price}€</h6>
                    <p>la journée</p>
                </div>
                <Link
                    to={`/salles/${slug}`}
                    className='btn-primary-main room-link'>
                    En vedette
                </Link>
            </div>
            <p className='room-info'>{name}</p>
        </article>
    );
}
