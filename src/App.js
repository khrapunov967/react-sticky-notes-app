import React, { useMemo, useReducer } from "react";
import { Context } from "./context";
import reducer from "./reducer";
import Header from "./components/Header/Header";
import NotesContainer from "./components/NotesContainer/NotesContainer";
import Modal from "./components/UI/Modal/Modal";


function App() {

  const initialState = {
    notes: [
      {id: 1, noteTitle: "January", noteContent: "asdfsadfsadfsadf sadfsdfsadfsadf sadfsadfsadf asdfsadfsadfsadf sadfsdfsadfsadf sadfsadfsadf asdfsadfsadfsadf sadfsdfsadfsadf sadfsadfsadf "},
      {id: 2, noteTitle: "January", noteContent: "asdfsadfsadfsadf sadfsdfsadfsadf sadfsadfsadf asdfsadfsadfsadf sadfsdfsadfsadf sadfsadfsadf asdfsadfsadfsadf sadfsdfsadfsadf sadfsadfsadf "},
      {id: 3, noteTitle: "January", noteContent: "asdfsadfsadfsadf sadfsdfsadfsadf sadfsadfsadf asdfsadfsadfsadf sadfsdfsadfsadf sadfsadfsadf asdfsadfsadfsadf sadfsdfsadfsadf sadfsadfsadf "},
    ],
    isModalVisible: false,
    noteTitle: "",
    noteContent: "",
    searchQuery: "",
    isClearSearchQueryIconVisible: false
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const filteredNotes = useMemo(() => {
    state.isClearSearchQueryIconVisible = state.searchQuery.length ? true : false;
    return state.notes.filter(note => note.noteContent.toLowerCase().includes(state.searchQuery.toLowerCase().trim()))
  }, [state.searchQuery, state.notes]);

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
