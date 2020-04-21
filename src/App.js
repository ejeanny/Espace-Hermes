import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
    return (
        <>
            <Navbar></Navbar>
            <h2>Hello from app</h2>
            <Footer></Footer>
        </>
    );
}
