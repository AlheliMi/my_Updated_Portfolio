
import React from "react";

/* import Navbar from "../components/Navbar/Navbar"; */
import Jumbotron from "../components/Jumbotron/Jumbotron"
import AboutMe from "../components/AboutMe/AboutMe";
import "../styles/flexbox.css"
import "../styles/scroll.css"
import "../styles/style.css"
/* import Footer from "../components/Footer/Footer"; */
/* import Cards from '../components/Cards/Cards'; */

function Home() {
    return(
        <div className="">
            <Jumbotron/>
            <AboutMe/>
        

        </div>
    )
}

export default Home;