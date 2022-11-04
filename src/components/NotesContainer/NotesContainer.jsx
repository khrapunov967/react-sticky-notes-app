import React from "react";
import NoteItem from "../NoteItem/NoteItem";
import "./NotesContainer.scss";

const NotesContainer = () => {
    return (
        <section className="notes-container">
            <NoteItem />
            <NoteItem />
            <NoteItem />
            <NoteItem />
            <NoteItem />
            <NoteItem />
            <NoteItem />
            <NoteItem />
        </section>
    );
};

export default NotesContainer;