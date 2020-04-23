import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RoomsContainer from "../components/RoomContainer";

import { Link } from "react-router-dom";

export default function () {
    return (
        <>
            <Hero hero='roomsHero'>
                <Banner title='Our rooms' subtitle=''>
                    <Link to='/' className='btn-primary'>
                        return home
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer></RoomsContainer>
        </>
    );
}
