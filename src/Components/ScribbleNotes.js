import React from "react";

import ScribbleCard from "./ScribbleCard";

const ScribbleNotes = ({notesData}) => {
    const notes = notesData.map((data) => {
        return(
        <ScribbleCard 
        tag={data.tag}
        name={data.name}
        body={data.body}
        id={data.id}
        key={data.id}
        />
        )
    })

   return ( 
   <div className="note-container">
        <div className="note-shadow"></div>
        <div className="note-content">
            {notes}
        </div>
    </div>
   )
}

export default ScribbleNotes