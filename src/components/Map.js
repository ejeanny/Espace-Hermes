import React from "react";
import map from "../images/map.jpg";

export default function Map() {
    return (
        <section className='map'>
            <div className='headline '>
                <h1>Où nous trouver</h1>
                <h3>
                    11 rue de la Vistule, 75013 Paris
                    <br />
                    10 Cité Joly, 75011 Paris, France
                </h3>
            </div>
            <img src={map} alt='' className='img-fluid' />
        </section>
    );
}
