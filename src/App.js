import React, { useEffect, useMemo, useReducer } from "react";
import { Context } from "./context";
import reducer from "./reducer";
import Header from "./components/Header/Header";
import NotesContainer from "./components/NotesContainer/NotesContainer";
import Modal from "./components/UI/Modal/Modal";


function App() {

  const initialState = {
    notes: JSON.parse(localStorage.getItem("notes")) || [],
    isModalVisible: false,
    noteTitle: "",
    noteTitleLettersNumber: 0,
    maxNoteTitleLettersNumber: 13,
    noteContent: "",
    noteContentLettersNumber: 0,
    maxNoteContentLettersNumber: 100,
    searchQuery: "",
    isClearSearchQueryIconVisible: false
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const filteredNotes = useMemo(() => {
    state.isClearSearchQueryIconVisible = state.searchQuery.length ? true : false;
    
    return state.notes.filter(note => note.noteContent.toLowerCase().includes(state.searchQuery.toLowerCase().trim()))
  }, [state.searchQuery, state.notes]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(state.notes));
  }, [state.notes]);

  return (
    <Context.Provider value={{state, dispatch, filteredNotes}}>
      <div className='wrapper'>
        <Header />
        <NotesContainer />
      </div>

      <Modal />
    </Context.Provider>
  );
}

export default App;
