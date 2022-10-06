import React from "react";
import Note from "../Note/Note";
import "./NotesSection.scss";

const NotesSection = () => {
    return (
        <section className="notes-section">
            <Note />
        </section>
    );
}

export default NotesSection;