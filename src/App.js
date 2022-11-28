import React from "react";
import Header from "./components/Header/Header";
import NotesContainer from "./components/NotesContainer/NotesContainer";
import Modal from "./components/UI/Modal/Modal";


function App() {
  return (
    <div>
      <div className='wrapper'>
        <Header />
        <NotesContainer />
      </div>

      <Modal />
    </div>
  );
}

export default App;
