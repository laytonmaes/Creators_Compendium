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
    <div className="shadow">
        <div className="note-container">
            <div className="note-content">
                {notes}
            </div>
        </div>
    </div>
   )
}

export default ScribbleNotes