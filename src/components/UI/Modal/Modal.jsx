import React, { useContext } from "react";
import { Context } from "../../../context";
import CloseIcon from "../../../assets/icons/close-icon.svg";
import ButtonWithShadow from "../ButtonWithShadow/ButtonWithShadow";
import "./Modal.scss";

const Modal = () => {

    const {state, dispatch} = useContext(Context);

    return (
        <div className={state.isModalVisible ? "modal__bg" : "modal__bg hidden"} onClick={() => dispatch({type: "hideModal"})}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <header className="modal__header">
                    <p className="modal__header__title">new note</p>

                    <img 
                        onClick={() => dispatch({type: "hideModal"})}
                        src={CloseIcon} 
                        alt="Close" 
                        className="modal__header__close-icon" 
                    />
                </header>

                <main className="modal__content">
                    <textarea 
                        value={state.noteContent}
                        onChange={(e) => dispatch({type: "changeNoteContentHandler", payload: e.target.value})}
                        cols="24" 
                        rows="10" 
                        className="modal__content__text" 
                        placeholder="type here..."
                    />                  
                </main>

                <footer className="modal__footer">
                    <ButtonWithShadow 
                        title={"create"}
                        onClick={() => dispatch({type: "createNote"})}
                    />
                </footer>
            </div>
        </div>
    );
};

export default Modal;