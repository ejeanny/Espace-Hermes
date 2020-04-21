import React, { Component } from "react";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";

import Loading from "./Loading";
import Title from "./Title";
import Room from "./Room";

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        let { loading, featuredRooms: rooms } = this.context;

        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />;
        });

        return (
            <>
                <section className='featured-rooms'>
                    <Title title='En vedette'></Title>
                    <div className='featured-rooms-center'>
                        {loading ? <Loading /> : rooms}
                    </div>
                    <div className='d-flex justify-content-center featured-rooms-btn'>
                        <Link
                            to={`/salles`}
                            className='btn-primary-main justify-content-center'>
                            Découvrez toutes nos salles
                        </Link>
                    </div>
                </section>
            </>
        );
    }
}
