import { NavLink } from "react-router-dom";

// Code below shows the Nav bar on the main page and its components
function NavBar(){


    return(
        <>
            <NavLink to="/home">Home</NavLink> | 
            <NavLink to="/library">Library</NavLink> |
            <NavLink to="/login">Login</NavLink>
        </>
    );
}

export default NavBar;