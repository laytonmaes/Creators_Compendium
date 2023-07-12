import React from "react";
import banner from "../Assets/bookMark.svg"
import searchIcon from "../Assets/searchIcon.svg"
import { useState } from "react";

import data from "../mockData";

// ================= components ================= //
import ScribbleNotes from "./ScribbleNotes";

const ScribblePage = () => {
    const [tagSearch, setTagSearch] = useState("")
    const [notesData, setNotesData] = useState(data.basicNotes)
    return (
        <main>
            <section className="tags-nav">
                <div className="tags-div-one">
                    <button className="tags-button">
                        <img className="icon" src={banner} alt="Tags Banner" />
                        <h3>Manage Tags</h3>
                    </button>
                    <select className="filter-tags"></select>
                </div>
                <div className="tags-div-two">
                    <button className="enter-search-tags">
                        <img 
                        className="icon-search" src={searchIcon} alt="Tags"
                        />
                    </button>
                    <input 
                    type="text"
                    className="search-tags" 
                    placeholder="Search Tag by a Word"
                    name="search-tags"
                    value={tagSearch}
                    onChange={event => setTagSearch(event.target.value)}
                    >
                    </input>
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