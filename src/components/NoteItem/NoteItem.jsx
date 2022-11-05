import React, { useContext } from "react";
import { Context } from "../../context";
import TrashIcon from "../../assets/icons/trash-icon.svg";
import "./NoteItem.scss";

const NoteItem = ({note}) => {

    const {dispatch} = useContext(Context);

    return (
        <div className="note-item">
            <div className="note-item__header">
                <p className="note-item__header__title">{note.noteTitle}</p>

                <img 
                    onClick={() => dispatch({type: "removeNote", payload: note.id})}
                    src={TrashIcon} 
                    alt="Delete" 
                    className="note-item__header__remove-note" 
                />
            </div>

            <div className="note-item__content">
                {note.noteContent}
            </div>
        </div>
    );
};

export default NoteItem;