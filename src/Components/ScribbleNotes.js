import React from "react";
import edit from "../Assets/pencil.svg"

const ScribbleNotes = () => {
   return ( <div className="note-container">
        <h4 className="note-tag">event</h4>
        <div className="note-main">
            <header className="note-head">
                <h3>War of the Empath</h3>
                <img className="settings-cog" src={edit} alt="Settings Button for Notes"/> 
                <button className="delete-note-button">-</button>
            </header>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud ullamco laboris....
            </p>
        </div>
    </div>
   )
}

export default ScribbleNotes