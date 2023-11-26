import { NavLink } from "react-router-dom";
import React from "react";

// Code below shows the Nav bar on the main page and its components
function NavBar(){


    return(
        <nav className = "NavBar">
            <NavLink to="/home" className = "NavBarHead">Home</NavLink> | 
            <NavLink to="/library" className = "NavBarHead">Library</NavLink> |
            <NavLink to="/login" className = "NavBarHead">Login</NavLink>
            <NavLink to="/recommendations" className = "NavBarHead">Recommendations</NavLink>
        </nav>
    );
}

export default NavBar;