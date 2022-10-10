import React from "react";
import Note from "../Note/Note";

import "./NotesSection.scss";

const NotesSection = ({notes, setNotes}) => {
    
    const removeNote = (note) => {
        localStorage.setItem("notes", JSON.stringify(notes.filter(currNote => currNote.id !== note.id)))
        setNotes(JSON.parse(localStorage.getItem("notes")));
    }
    
    return (
        <section className="notes-section">
            {(notes.length) ? 
                notes.map((note) => <Note noteText={note.noteText} removeNote={() => removeNote(note)} key={note.id}/>)
              : <p className="notes-section__no-notes-msg">No Notes</p>
            }
        </section>
    );
}

export default NotesSection;