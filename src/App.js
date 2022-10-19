import React, { useState, useMemo, useEffect } from "react";
import NotesSection from "./components/NotesSection/NotesSection";
import ModalWindow from "./components/UI/ModalWindow/ModalWindow";
import HeaderSection from "./components/HeaderSection/HeaderSection";


function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) ?? []);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  

  const filteredNotes = useMemo(() => {
    return notes.filter(note => note.noteText.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, notes]);

  return (
    <div className='wrapper'>
      <HeaderSection 
        setIsModalVisible={setIsModalVisible}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <NotesSection 
        notes={filteredNotes} 
        setNotes={setNotes}
      />

      <ModalWindow 
        isModalVisible={isModalVisible} 
        setIsModalVisible={setIsModalVisible}
        notes={notes}
        setNotes={setNotes}
      />
    </div>
  );
}

export default App;
