import React from "react";
import "./ButtonWithShadow.scss";

const ButtonWithShadow = ({title}) => {
    return (
        <button className="btn-with-shadow">
            {title}
        </button>
    );
};

export default ButtonWithShadow;