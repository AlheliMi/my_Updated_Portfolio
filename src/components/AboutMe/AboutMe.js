import React from "react";

function AboutMe() {
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
<div className=" flexRow flexBetween">
<a id= "resume" href="" className="lilac round size1">
  <p className="words">My Resume</p>
</a>
<a id= "skills" href="" className="blue round size1">
 <p className="words">Current Projects </p>
</a>
<a id= "work" href="" className="pink round size1">
  <p className="words">Contact me</p>
</a>

</div>

<p>Enthusiastic technical professional with complete understanding of entire software development lifecycle. Highly trained in Javascript and Node, HTML and CSS, and known for having talents in front-end and back-end.</p>

  </div>
</div>




    </div>
  );
}

export default AboutMe;