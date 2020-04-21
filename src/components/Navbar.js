import React, { Component } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";

export default class Navbar extends Component {
    state = {
        isOpen: false,
    };

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <>
                <nav className='navbar-main'>
                    <div className='nav-center-main'>
                        <div className='nav-header-main'>
                            <Link to='/'>
                                <img src={logo} alt='Espace Hermes'></img>
                            </Link>

                            <button
                                type='button'
                                className='nav-btn-main'
                                onClick={this.handleToggle}>
                                <FaAlignRight className='nav-icon-main'></FaAlignRight>
                            </button>
                        </div>
                        <ul
                            className={
                                this.state.isOpen
                                    ? "nav-links-main show-nav-main"
                                    : "nav-links-main"
                            }>
                            <li>
                                <Link to='/'>Acceuil</Link>
                            </li>
                            <li>
                                <Link to='/présentation'>Présentation</Link>
                            </li>
                            <li>
                                <Link to='/salles'>Nos Salles</Link>
                            </li>
                            <li>
                                <Link to='/salles'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}
