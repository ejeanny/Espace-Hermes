import React, { Component } from "react";
import Title from "./Title";
import train from "../images/train.png";
import people from "../images/people.png";
import wedding from "../images/wedding.png";

export default class About extends Component {
    state = {
        services: [
            {
                icon: train,
                title: "Une accessibilité idéale",
                info:
                    "Toutes les gares parisiennes sont à moins de 30 minutes.",
            },
            {
                icon: people,
                title: "Des salles modulables",
                info: "Pour une capacité allant de 15 à 100 personnes.",
            },
            {
                icon: wedding,
                title: "Un espace de réception",
                info: "Idéal pour organiser vos déjeuners et réceptions.",
            },
        ],
    };

    render() {
        return (
            <section className='services'>
                <Title title='Services'></Title>
                <div className='services-center'>
                    {this.state.services.map((item, index) => {
                        console.log(item.icon);

                        return (
                            <article key={index} className='service'>
                                <img src={item.icon} />
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}
