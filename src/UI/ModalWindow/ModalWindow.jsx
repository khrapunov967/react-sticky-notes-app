import React, { useState } from "react";
import Button from "../Button/Button";
import "./ModalWindow.scss";

const ModalWindow = ({isModalVisible, setIsModalVisible, notes, setNotes}) => {

    const [noteText, setNoteText] = useState("");

    const createNote = () => {
        setNotes([...notes, {id: Date.now(), noteText: noteText}]);
        setNoteText("")
        setIsModalVisible(false);
    }

    return (
        <div className={isModalVisible ? "bg" : "bg hidden"}>
            <div className="modal">
                <header className="modal__header">
                    <p className="modal__header__title">Create New Note</p>
                    <div className="modal__header__close-icon" onClick={() => setIsModalVisible(false)}>
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
                    <Button buttonName={"Add"} onClick={createNote}/>
                </footer>
            </div>
        </div>
    );
};

export default ModalWindow;