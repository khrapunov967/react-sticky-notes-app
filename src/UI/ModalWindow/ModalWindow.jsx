import React from "react";
import "./ModalWindow.scss";

const ModalWindow = () => {
    return (
        <div className="modal-bg">
            <div className="modal">
                <div className="modal__title">Create New Note</div>

                <textarea 
                    rows={5} 
                    cols={4} 
                    className="modal__note-text"
                    placeholder="Note text..."
                />

                <div className="container">
                    <button className="modal__create-note-btn">Create</button>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;