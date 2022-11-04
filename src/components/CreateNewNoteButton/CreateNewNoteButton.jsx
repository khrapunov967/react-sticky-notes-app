import React from "react";
import AddIcon from "../UI/AddIcon/AddIcon";
import "./CreateNewNoteButton.scss";

const CreateNewNoteButton = () => {
    return (
        <button className="create-new-note-btn">
            <AddIcon />
        </button>
    );
};

export default CreateNewNoteButton;