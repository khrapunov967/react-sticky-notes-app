import React from "react";
import Header from "./components/Header/Header";
import NotesContainer from "./components/NotesContainer/NotesContainer";


function App() {
  return (
    <div className='wrapper'>
      <Header />
      <NotesContainer />
    </div>
  );
}

export default App;
