import React, { useState, useMemo } from "react";
import NotesSection from "./components/NotesSection/NotesSection";
import ModalWindow from "./UI/ModalWindow/ModalWindow";
import HeaderSection from "./components/HeaderSection/HeaderSection";


function App() {

  const [notes, setNotes] = useState([
    {id: 1, noteText: 'It has survived not only five centuries, but also the leapg, , but also the leapg, but also the leapg, but also the leapg'},
    {id: 2, noteText: 'It has survived not only five centuries, but also the leapg, , but also the leapg, but also the leapg, but also the leapg'},
    {id: 3, noteText: 'It has survived not only five centuries, but also the leapg, , but also the leapg, but also the leapg, but also the leapg'},
    {id: 4, noteText: 'It has survived not only five centuries, but also the leapg, , but also the leapg, but also the leapg, but also the leapg'}
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const filteredNotes = useMemo(() => {
    return notes.filter(note => note.noteText.includes(searchValue))
  }, [searchValue, notes]);

  return (
    <div className='wrapper'>
      <HeaderSection 
        setIsModalVisible={setIsModalVisible}
        notes={notes}
        setNotes={setNotes}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
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
