import React from "react";
import { Link, useLocation } from "react-router-dom";


function Navbar() {
  const location = useLocation();

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center nav-pills nav-fill nav-justified">

      <div className="">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/"  className={location.pathname === "/"  ? "nav-link" : "nav-link" } href="#">
            <i className="fas fa-laptop-house"></i>
               <p>HOME</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Portfolio" className={location.pathname === "/Portfolio" ?  "nav-link": "nav-link"}>
            <i class="fas fa-project-diagram"></i>
              PROJECTS
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/Contact_Me" className={location.pathname === "/Contact_Me" ?  "nav-link": "nav-link"}>
            <i class="far fa-comments"></i>
              CONTACTME 
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;