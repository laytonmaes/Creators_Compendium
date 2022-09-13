import React from "react";
import banner from "../Assets/bookMark.svg"

// ================= components ================= //
import ScribbleNotes from "./ScribbleNotes";

const ScribblePage = () => {
    return (
        <main>
            <section className="section-tags">
                <div className="tags-button">
                    <img className="banner" src={banner} alt="Tags Banner" />
                    <h3>Manage Tags</h3>
                </div>
                <input className="filter-tags"></input>
            </section>
            <input className="search-tags"></input>
            <section className="notes">
                <button className="add-note">+</button>
                <ScribbleNotes />
                <ScribbleNotes />
            </section>
        </main>
    )
}

export default ScribblePage