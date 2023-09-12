import React from "react";
import edit from "../Assets/pencil.svg"

const ScribbleCard = ({ tag, name, body, id}) => {
    return (
        <div className="note-card" id={id}>
            <div className="tag-div" style={{backgroundColor: tag.colorHex}}>
                <img className="settings-cog" src={edit} alt="Settings Button for Notes"/> 
                <h4 className="note-tag">{tag.tagName}</h4>
                <div className="spacer"></div>
            </div> 
            <div className="note-main">
                <header className="note-head">
                    <h3 className="note-name">{name}</h3>
                    <button className="delete-note-button">-</button>
                </header>
                <p className="note-body-text">{body}</p>
            </div>
        </div>
    )
}

export default ScribbleCard