import React from "react";
import "./NoteItem.scss";

const NoteItem = ({note}) => {
    return (
        <div className="note-item">
            <div className="note-item__header">
                <p className="note-item__header__title">{note.noteTitle}</p>
            </div>

            <div className="note-item__content">
                {note.noteContent}
            </div>
        </div>
    );
};

export default NoteItem;