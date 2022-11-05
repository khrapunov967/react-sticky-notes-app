import React from "react";
import "./ButtonWithShadow.scss";

const ButtonWithShadow = ({title, ...props}) => {
    return (
        <button className="btn-with-shadow" {...props}>
            {title}
        </button>
    );
};

export default ButtonWithShadow;