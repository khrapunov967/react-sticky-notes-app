import React from "react";
import Note from "../Note/Note";

import "./NotesSection.scss";

const NotesSection = ({notes, setNotes}) => {
    
    const removeNote = (id) => {
        setNotes(notes.filter(currNote => currNote.id !== id));
    }
    
    return (
        <section className="notes-section">
            {
                (notes.length) 
                    ? notes.map((note) => <Note noteText={note.noteText} removeNote={() => removeNote(note.id)} key={note.id}/>)
                    : <p className="notes-section__no-notes-msg">No Notes</p>
            }
        </section>
    );
}

export default NotesSection;