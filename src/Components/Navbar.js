import React from "react";
import logoSmall from "../Assets/logo_small.svg"

const Navbar = ({ displayedPage }) => {
    return (
        <header className="navbar">
            <section className="main-nav">
                <img className="logo-header" src={logoSmall} alt="Logo of Book" />
                <h1>Creators Compendium</h1>
            </section>
            <span className="splitter" />
            <section className="sub-header">
                <h2>{displayedPage}</h2>
                <div className="menu-button">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <span className="splitter" />
            </section>
        </header>
    )
}

export default Navbar