import React from "react";
import { useContext } from "react";
import { Context } from "../../context";
import NoteItem from "../NoteItem/NoteItem";
import "./NotesContainer.scss";

const NotesContainer = () => {

    const {state} = useContext(Context);

    return (
        <section className="notes-container">
            {
                state.notes.map(note => <NoteItem note={note} key={note.id}/>)
            }
        </section>
    );
};

export default NotesContainer;