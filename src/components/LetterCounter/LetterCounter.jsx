import React from "react";
import "./LetterCounter.scss";

const LetterCounter = ({curr, max}) => {
    return (
        <div className={+curr > +max ? "letter-counter overflow" : "letter-counter"}>
            {curr}/{max}
        </div>
    );
};

export default LetterCounter;