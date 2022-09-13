import React from "react";
import logoSmall from "../Assets/logo_small.svg"

const Navbar = ({ displayedPage }) => {
    return (
        <header className="navbar">
            <section className="main-nav">
                <img className="logo-header" src={logoSmall} alt="Logo of Book" />
                <h1>Creators Compendium</h1>
            </section>
            <section className="sub-header">
                <h2>{displayedPage}</h2>
                <div className="menu-button">
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                    <div className="line line3"></div>
                </div>
            </section>
            <span className="splitter-default" />
        </header>
    )
}

export default Navbar