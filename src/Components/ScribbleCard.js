import React from "react";
import edit from "../Assets/pencil.svg"

const ScribbleCard = ({ tag, name, body, id}) => {
    return (
        <div className="note-card" id={id}>
            <div className="tag-div">
                <h4 className="note-tag">{tag.tagName}</h4>
            </div> 
            <div className="note-main">
                <header className="note-head">
                    <h3>{name}</h3>
                    <img className="settings-cog" src={edit} alt="Settings Button for Notes"/> 
                    <button className="delete-note-button">-</button>
                </header>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default ScribbleCard