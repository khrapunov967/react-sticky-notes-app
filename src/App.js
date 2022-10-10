import React, { useState, useMemo } from "react";
import NotesSection from "./components/NotesSection/NotesSection";
import ModalWindow from "./components/UI/ModalWindow/ModalWindow";
import HeaderSection from "./components/HeaderSection/HeaderSection";


function App() {

  const setAndGetLocalStorage = () => {
    localStorage.setItem("notes", JSON.stringify([
      {id: 1, noteText: 'It has survived not only five centuries, but also the leapg, , but also the leapg, but also the leapg, but also the leapg'},
      {id: 2, noteText: 'It has survived not only five centuries, but also the leapg, , but also the leapg, but also the leapg, but also the leapg'},
      {id: 3, noteText: 'It has survived not only five centuries, but also the leapg, , but also the leapg, but also the leapg, but also the leapg'},
      {id: 4, noteText: 'It has survived not only five centuries, but also the leapg, , but also the leapg, but also the leapg, but also the leapg'},
    ]));

    return JSON.parse(localStorage.getItem("notes"));
  };

  const [notes, setNotes] = useState(localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : setAndGetLocalStorage)

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotes = useMemo(() => {
    return notes.filter(note => note.noteText.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, notes]);

  return (
    <div className='wrapper'>
      <HeaderSection 
        setIsModalVisible={setIsModalVisible}
        notes={notes}
        setNotes={setNotes}
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
