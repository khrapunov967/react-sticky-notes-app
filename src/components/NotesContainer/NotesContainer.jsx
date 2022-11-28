import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import NoteItem from "../NoteItem/NoteItem";
import "./NotesContainer.scss";

const NotesContainer = () => {
    const notes = useSelector(state => state.noteReducer.notes);
    const searchQuery = useSelector(state => state.searchReducer.query);

    const filteredNotes = useMemo(() => {
        return notes.filter(note => note.content.toLowerCase().includes(searchQuery.toLowerCase().trim()))
      }, [notes, searchQuery]);

    return (
        <section className="notes-container">
            {
                !filteredNotes.length ? 
                    <p className="notes-container__no-notes-msg">No Notes</p> : 
                    filteredNotes.map(note => <NoteItem note={note} key={note.id}/>)
            }
        </section>
    );
};

export default NotesContainer;