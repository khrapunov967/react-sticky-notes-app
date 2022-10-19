import React from "react";
import "./LettersCounter.scss";

const LettersCounter = ({currentNumber, maxNumber}) => {  
    return (
        <p className={currentNumber <= maxNumber ? "letters-counter" : "letters-counter overflow"}>
            {currentNumber} / {maxNumber}
        </p>
    );
};

export default LettersCounter;