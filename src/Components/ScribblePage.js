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
            <section className="tags-nav">
                <div className="tags-div-one">
                    <button className="tags-button">
                        <img className="banner" src={banner} alt="Tags Banner" />
                        <h3>Manage Tags</h3>
                    </button>
                    <select className="filter-tags"></select>
                </div>
                <div className="tags-div-two">
                    <input className="search-tags"></input>
                </div>
                <span className="splitter-default" />
            </section>
            <section className="notes">
                <button className="add-note">
                    + 
                    <span className="add-note-name"> Add Note</span>
                </button>

                <ScribbleNotes notesData={data.basicNotes}/>
            </section>
        </main>
    )
}

export default ScribblePage