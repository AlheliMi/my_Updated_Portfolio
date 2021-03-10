import React from "react";
import { Link, useLocation } from "react-router-dom";


function Navbar() {
  const location = useLocation();

  return (
 <div>
    <nav class="navbar navbar-light bg-light justify-content-center">
  <form class="form-inline">
<Link to="/About_Me"  className={location.pathname === "/About_Me"  ? "nav-link" : "nav-link" }>
<button className="btn btn-outline-info button" type="button">
  <i className="fas fa-laptop-house fa-2x"></i>
   <p>HOME</p>
</button>
</Link>
<Link to="/Portfolio" className={location.pathname === "/Portfolio" ?  "nav-link": "nav-link"}>
  <button className="btn btn-outline-info button" type="button">
      <i class="fas fa-project-diagram fa-2x"></i>
        <p>PROJECTS</p>
  </button>  
</Link>

<Link to="/Contact_Me" className={location.pathname === "/Contact_Me" ?  "nav-link": "nav-link"}>
            <button className="btn btn-outline-info button"> <i class="far fa-comments fa-3x"></i>
           <p>CONTACT ME</p> 
            </button> 
            </Link>



  </form>
</nav>
</div>
  );
}

export default Navbar;