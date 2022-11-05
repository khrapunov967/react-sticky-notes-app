import React from "react";
import CloseIcon from "../../../assets/icons/close-icon.svg";
import ButtonWithShadow from "../ButtonWithShadow/ButtonWithShadow";
import "./Modal.scss";

const Modal = () => {
    return (
        <div className="modal__bg">
            <div className="modal">
                <header className="modal__header">
                    <p className="modal__header__title">new note</p>

                    <img src={CloseIcon} alt="Close" className="modal__header__close-icon" />
                </header>

                <main className="modal__content">
                    <textarea cols="24" rows="10" className="modal__content__text" placeholder="type here..."/>                  
                </main>

                <footer className="modal__footer">
                    <ButtonWithShadow title={"create"}/>
                </footer>
            </div>
        </div>
    );
};

export default Modal;