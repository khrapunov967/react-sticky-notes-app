import React, { useState } from "react";
import Button from "../Button/Button";

import "./ModalWindow.scss";

const ModalWindow = ({isModalVisible, setIsModalVisible, notes, setNotes}) => {

    const [noteText, setNoteText] = useState("");

    const createNote = () => {
        if (noteText.trim()) {
            localStorage.setItem("notes", JSON.stringify([...notes, {id: Date.now(), noteText: noteText}]));
            setNotes(JSON.parse(localStorage.getItem("notes")));
            setNoteText("")
            setIsModalVisible(false);
        }
    }

    const closeModalWindow = () => {
        setIsModalVisible(false);
        setNoteText("");
    }

    return (
        <div className={isModalVisible ? "bg" : "bg hidden"} onClick={() => closeModalWindow()}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>

                <header className="modal__header">
                    <div className="modal__header__close-icon" onClick={() => closeModalWindow()}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>
                    </div>
                </header>

                <textarea 
                    value={noteText} 
                    onChange={(e) => setNoteText(e.target.value)}
                    rows={7} cols={7} 
                    placeholder="Note text..." 
                    className="modal__note-text"
                />

                <footer className="modal__footer">
                    <Button buttonName={"Create"} onClick={createNote}/>
                </footer>
                
            </div>
        </div>
    );
};

export default ModalWindow;