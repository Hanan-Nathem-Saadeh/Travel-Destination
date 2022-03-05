import "./Header.css";
import React from 'react';
import Navbar from "../Navbar/Navbar";
function Header() {
    return (
        <header id="header">
            <Navbar id ="navBr" />
            <h1 id ="h1">Traveling Agency</h1>
       </header>
    );

}
export default Header;
