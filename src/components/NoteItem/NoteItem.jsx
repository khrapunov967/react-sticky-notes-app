import React from "react";
import "./NoteItem.scss";

const NoteItem = () => {
    return (
        <div className="note-item">
            <div className="note-item__header">
                <p className="note-item__header__title">January</p>
            </div>

            <div className="note-item__content">
                asdfsadfsadfsadf sadfsdfsadfsadf sadfsadfsadf 
                asdfsadfsadfsadf sadfsdfsadfsadf sadfsadfsadf 
                asdfsadfsadfsadf sadfsdfsadfsadf sadfsadfsadf 
                asdfsadfsadfsadf sadfsdfsadfsadf sadfsadfsadf 
            </div>
        </div>
    );
};

export default NoteItem;