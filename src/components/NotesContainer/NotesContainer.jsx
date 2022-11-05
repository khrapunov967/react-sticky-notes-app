import React, { useContext } from "react";
import { Context } from "../../context";
import NoteItem from "../NoteItem/NoteItem";
import "./NotesContainer.scss";

const NotesContainer = () => {

    const {filteredNotes} = useContext(Context);

    return (
        <section className="notes-container">
            {
                filteredNotes.map(note => <NoteItem note={note} key={note.id}/>)
            }
        </section>
    );
};

export default NotesContainer;