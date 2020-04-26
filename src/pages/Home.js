import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import About from "../components/About";
import Map from "../components/Map";

export default function Home() {
    return (
        <>
            <Hero>
                <Banner
                    title='Un cadre de travail agéable'
                    subtitle='pour tous vos evenement professionnel'>
                    <Link to='/salles' className='btn-primary-main'>
                        Nos salles
                    </Link>
                </Banner>
            </Hero>
            <About />
            <FeaturedRooms />
            <Map />
        </>
    );
}
