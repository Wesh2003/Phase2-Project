import { NavLink } from "react-router-dom";
import React from "react";

// Code below shows the Nav bar on the main page and its components
function NavBar(){


    return(
        <nav>
            <NavLink to="/home">Home</NavLink> | 
            <NavLink to="/library">Library</NavLink> |
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/recommendations">Recommendations</NavLink>
        </nav>
    );
}

export default NavBar;