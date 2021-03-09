import React from "react";
import { Link, useLocation } from "react-router-dom"

function AboutMe() {
const location= useLocation

  return (

    <div className="flexCol flexBetween">
<div className="barra0"></div>
<div className="flexRow flexCenter">
  <div>
  <div className="home roundTopRight roundBottomLeft roundBottomRight"></div>
  </div>
<div className="aboutMe flexCol">
    <h1>Alhelí</h1>
<h2>about me.....</h2>
<div className="barra1"></div>
<div className="flexRow flexBetween">
<Link to="/MyResume" id= "resume" className={location.pathname ==="/MyResume" ? "lilac round size1": "lilac round size1"} >
  <p className="words">My Resume</p>
</Link>
<Link to= "/Portfolio" id="Projects" className={location.pathname === "/Portfolio" ? "blue round size1":"blue round size1"}>
 <p className="words">Current Projects </p>
</Link>
<Link to= "/ContactMe" id= "ContactMe"  className= {location.pathname === "/ContactMe" ? "pink round size1" : "pink round size1"}>
  <p className="words">Contact me</p>
</Link>
</div>

<div className="barra1"></div>

<div className="">
  <p className="words">
  I am Mexican, currently living in Toronto, I was first form as a Dental surgeon, specialist in Orthodontics and Orthopedics, 
  now I am an enthusiastic technical professional in software development lifecycle, trained in Javascript and Node, HTML and CSS, 
  knowledge in front-end and back-end. I´m always in the search of learn something new
  </p>
  <p>Always Smile</p>
</div>

  </div>
</div>




    </div>
  );
}

export default AboutMe;