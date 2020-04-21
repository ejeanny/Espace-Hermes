import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { MdLocalPhone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";

export default function Footer() {
    return (
        <>
            <section className='footer-top'>
                <div className='footer-top-center container'>
                    <div className='footer-top-left col-md-6'>
                        <p className='footer-top-left-contact'>
                            Plus d'informations ?
                            <Link to='/contact'>Contactez-nous</Link>
                        </p>
                    </div>
                    <div className='footer-top-right col-md-6'>
                        <ul className='footer-top-contact'>
                            <li>
                                <MdLocalPhone />
                                +33 (0)7 69 000 200
                            </li>
                            <li>
                                <AiOutlineMail />
                                <a href='mailto:location@espace-hermes.fr'>
                                    location@espace-hermes.fr
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='footer-middle'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-sd-12'>
                            <h3 className='footer-middle-description'>
                                À propos
                            </h3>
                            <div className='footer-middle-description'>
                                <p>
                                    Nos salles de réunion sont idéalement
                                    localisées, à moins de 30 minutes des
                                    différentes gares parisiennes avec de
                                    nombreuses stations de métro à proximité.
                                </p>
                                <p>
                                    Nos salles sont climatisées, lumineuses et
                                    modulables.
                                    <br /> A disposition : vidéo-projecteur,
                                    paper-board, tableau blanc, Wifi.
                                    <br /> En Option : Accueil petit-déjeuner,
                                    Café, Cocktail, etc. .
                                </p>
                                <img src={logo} alt='Espace Hermes'></img>
                            </div>
                        </div>
                        {/*<div className='col-md-4 col-sd-12'>
                            <h3>Réseaux sociaux</h3>
                            <ul>
                                <li>
                                    <FaFacebook />
                                    <a
                                        href='https://www.facebook.com/espacehermes'
                                        target='_blank'>
                                        facebook.com/espacehermes
                                    </a>
                                </li>
                            </ul>
    </div>*/}
                        <div className='col-md-6 col-sd-12'>
                            <h3 className='footer-middle-description'>
                                Nos coordonées
                            </h3>
                            <ul className='footer-middle-description'>
                                <li>
                                    <AiOutlineHome />
                                    10, Cité Joly 75011 - Paris, France
                                </li>
                                <li>
                                    <MdLocalPhone />
                                    +33 (0)7 69 000 200
                                </li>
                                <li>
                                    <AiOutlineMail />
                                    <a href='mailto:location@espace-hermes.fr'>
                                        location@espace-hermes.fr
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className='footer-bottom'>
                <div className='container copyright'>
                    © 2016 Espace HERMÈS. Tous droits réservés.
                </div>
            </section>
        </>
    );
}
