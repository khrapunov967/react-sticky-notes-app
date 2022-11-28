import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
    name: "noteSlice",
    initialState: {
        notes: JSON.parse(localStorage.getItem("notes")) || [],
    },
    reducers: {
        addNote(state, action) {
            const newNote = {
                id: Date.now(),
                title: action.payload.title,
                content: action.payload.content
            };

            state.notes.push(newNote);

            localStorage.setItem("notes", JSON.stringify(state.notes));
        },
        removeNote(state, action) {
            state.notes = state.notes.filter(note => note.id !== action.payload.id);

            localStorage.setItem("notes", JSON.stringify(state.notes));
        }
    }
});

export const { addNote, removeNote } = noteSlice.actions;

export default noteSlice.reducer;