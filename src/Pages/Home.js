
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Cards from '../components/Cards/Cards';
import AboutMe from "../components/AboutMe/AboutMe";

function Home() {
    return(
        <div className=" ">
            <Navbar/>
            <Cards/>
            <AboutMe/>
            <Footer/>
        </div>
    )
}

export default Home;