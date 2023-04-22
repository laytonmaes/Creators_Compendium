import React from "react";
import banner from "../Assets/bookMark.svg"
import { useState } from "react";

import data from "../mockData";

// ================= components ================= //
import ScribbleNotes from "./ScribbleNotes";

const ScribblePage = () => {
    const [notesData, setNotesData] = useState(data.basicNotes)
    return (
        <main>
            <section className="section-tags">
                <div className="tags-button">
                    <img className="banner" src={banner} alt="Tags Banner" />
                    <h3>Manage Tags</h3>
                </div>
                <span className="splitter-default" />
                <input className="filter-tags"></input>
            </section>
            <input className="search-tags"></input>
            <section className="notes">
                <button className="add-note">+</button>

                <ScribbleNotes notesData={data.basicNotes}/>
            </section>
        </main>
    )
}

export default ScribblePage