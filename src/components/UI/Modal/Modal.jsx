import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideModal } from "../../../store/modalSlice";
import { addNote } from "../../../store/noteSlice";
import { MAX_NOTE_CONTENT, MAX_NOTE_TITLE } from "../../../utils/constants";
import CloseIcon from "../../../assets/icons/close-icon.svg";
import ButtonWithShadow from "../ButtonWithShadow/ButtonWithShadow";
import LetterCounter from "../../LetterCounter/LetterCounter";
import "./Modal.scss";

const Modal = () => {

    const isModalVisible = useSelector(state => state.modalReducer.isModalVisible);
    const dispatch = useDispatch();

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const createNote = () => {

        if (!note.title.trim().length || !note.content.trim().length) {
            return ;
        }

        if (note.title.length > MAX_NOTE_TITLE || note.content.length > MAX_NOTE_CONTENT) {
            return ;
        }

        dispatch(addNote(note));
        dispatch(hideModal());

        setNote({
            ...note,
            title: "",
            content: ""
        });
    };

    const closeModal = () => {
        dispatch(hideModal());
        setNote({
            ...note,
            title: "",
            content: ""
        })
    };

    return (
        <div className={isModalVisible ? "modal__bg" : "modal__bg hidden"} onClick={closeModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <header className="modal__header">
                    <p className="modal__header__title">
                        new note
                    </p>

                    <img 
                        onClick={closeModal}
                        src={CloseIcon} 
                        alt="Close" 
                        className="modal__header__close-icon" 
                    />
                </header>

                <main className="modal__content">
                    <input 
                        value={note.title}
                        onChange={(e) => setNote({...note, title: e.target.value})}
                        type="text" 
                        name="title"  
                        className="modal__content__title"
                        placeholder="note title..."
                    />

                    <div className="letter-counter-container">
                        <LetterCounter 
                            curr={note.title.length} 
                            max={MAX_NOTE_TITLE}
                        />
                    </div>

                    <textarea 
                        value={note.content}
                        onChange={(e) => setNote({...note, content: e.target.value})}
                        cols="24" 
                        rows="10" 
                        className="modal__content__text" 
                        placeholder="note text..."
                    />   

                    <div className="letter-counter-container">
                        <LetterCounter 
                            curr={note.content.length} 
                            max={MAX_NOTE_CONTENT}
                        />
                    </div>               
                </main>

                <footer className="modal__footer">
                    <ButtonWithShadow 
                        title={"create"}
                        onClick={createNote}
                    />
                </footer>
            </div>
        </div>
    );
};

export default Modal;