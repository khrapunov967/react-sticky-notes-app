import React from "react";
import SearchIcon from "../../../assets/icons/search-icon.svg";
import CloseIcon from "../../../assets/icons/close-icon.svg";
import "./SearchBar.scss";

const SearchBar = () => {
    return (
        <div className="search-bar">
            <img src={SearchIcon} alt="Search Icon" className="search-bar__search-icon"/>

            <input 
                type="text" 
                name="search-stroke" 
                className="search-bar__search-stroke" 
                placeholder="search note..."
            />

            <img src={CloseIcon} alt="Close Icon" className="search-bar__clear-icon" />
        </div>
    );
};

export default SearchBar;