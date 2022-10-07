import React from "react";
import NotesSection from "./components/NotesSection/NotesSection";
import ModalWindow from "./UI/ModalWindow/ModalWindow";
import SearchBar from "./UI/SearchBar/SearchBar";

function App() {
  return (
    <div className='wrapper'>
      <SearchBar placeholder={"Search note..."}/>
      <NotesSection />
      {/* <ModalWindow /> */}
    </div>
  );
}

export default App;
