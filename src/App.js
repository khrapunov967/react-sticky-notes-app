import React, { useReducer } from "react";
import { Context } from "./context";
import reducer from "./reducer";
import Header from "./components/Header/Header";
import NotesContainer from "./components/NotesContainer/NotesContainer";
import CreateNewNoteButton from "./components/CreateNewNoteButton/CreateNewNoteButton";


function App() {

  const initialState = {
    notes: [
      {id: 1, noteTitle: "January", noteContent: "asdfsadfsadfsadf sadfsdfsadfsadf sadfsadfsadf asdfsadfsadfsadf sadfsdfsadfsadf sadfsadfsadf asdfsadfsadfsadf sadfsdfsadfsadf sadfsadfsadf "},
      {id: 2, noteTitle: "January", noteContent: "asdfsadfsadfsadf sadfsdfsadfsadf sadfsadfsadf asdfsadfsadfsadf sadfsdfsadfsadf sadfsadfsadf asdfsadfsadfsadf sadfsdfsadfsadf sadfsadfsadf "},
      {id: 3, noteTitle: "January", noteContent: "asdfsadfsadfsadf sadfsdfsadfsadf sadfsadfsadf asdfsadfsadfsadf sadfsdfsadfsadf sadfsadfsadf asdfsadfsadfsadf sadfsdfsadfsadf sadfsadfsadf "},
      {id: 4, noteTitle: "January", noteContent: "asdfsadfsadfsadf sadfsdfsadfsadf sadfsadfsadf asdfsadfsadfsadf sadfsdfsadfsadf sadfsadfsadf asdfsadfsadfsadf sadfsdfsadfsadf sadfsadfsadf "},
    ]
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{state}}>
      <div className='wrapper'>
        <Header />
        <NotesContainer />
        <CreateNewNoteButton />
      </div>
    </Context.Provider>
  );
}

export default App;
