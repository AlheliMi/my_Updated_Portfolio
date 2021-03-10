import React from "react";

import Navbar from "../components/Navbar/Navbar";
/* import Jumbotron from "../components/Jumbotron/Jumbotron"
import AboutMe from "../components/AboutMe/AboutMe"; */
import "../styles/flexbox.css"
import "../styles/scroll.css"
import "../styles/style.css"
/* import Footer from "../components/Footer/Footer"; */
import Cards from '../components/Cards/Cards';
import sideMenu from "../components/Cards/sideMenu"

function Portfolio() {
    return(
        <div className="">
            <sideMenu/>
            <Cards/>

        </div>
    )
}

export default Portfolio;