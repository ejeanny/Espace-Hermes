import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home() {
    return (
        <>
            <Hero>
                <Banner
                    title='Un cadre de travail agéable'
                    subtitle='pour tous vos evenement professionnel'>
                    <Link to='/rooms' className='btn-primary-main'>
                        Nos salles
                    </Link>
                </Banner>
            </Hero>
            <FeaturedRooms />
        </>
    );
}
