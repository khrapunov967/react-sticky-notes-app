import React from "react";
import { useDispatch } from "react-redux";
import TrashIcon from "../../assets/icons/trash-icon.svg";
import { removeNote } from "../../store/noteSlice";
import "./NoteItem.scss";

const NoteItem = ({note}) => {

    const dispatch = useDispatch();

    return (
        <div className="note-item">
            <div className="note-item__header">
                <p className="note-item__header__title">
                    {note.title}
                </p>

                <img 
                    onClick={() => dispatch(removeNote({id: note.id}))}
                    src={TrashIcon} 
                    alt="Delete" 
                    className="note-item__header__remove-note" 
                />
            </div>

            <div className="note-item__content">
                {note.content}
            </div>
        </div>
    );
};

export default NoteItem;