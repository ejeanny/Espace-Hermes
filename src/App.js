import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
    return (
        <>
            <Navbar></Navbar>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                {/*} <Route exact path='/salles' component={Rooms}></Route>
                <Route
                    exact
                    path='/salles/:slug'
                    component={SingleRoom}></Route>
                <Route exact path='/contact' component={Contact}></Route>
    <Route component={Error}></Route>*/}
            </Switch>
            <Footer></Footer>
        </>
    );
}
