import React from "react";
import NotesSection from "./components/NotesSection/NotesSection";
import SearchBar from "./UI/SearchBar/SearchBar";

function App() {
  return (
    <div className='wrapper'>
      <SearchBar placeholder={"Search note..."}/>
      <NotesSection />
    </div>
  );
}

export default App;
