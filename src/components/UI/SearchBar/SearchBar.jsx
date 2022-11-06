import React, { useContext } from "react";
import { Context } from "../../../context";
import SearchIcon from "../../../assets/icons/search-icon.svg";
import CloseIcon from "../../../assets/icons/close-icon.svg";
import "./SearchBar.scss";

const SearchBar = ({onChange}) => {

    const {state, dispatch} = useContext(Context);

    return (
        <div className="search-bar">
            <img 
                src={SearchIcon} 
                alt="Search Icon" 
                className="search-bar__search-icon"
            />

            <input 
                value={state.searchQuery}
                onChange={onChange}
                type="text" 
                name="search-stroke" 
                className="search-bar__search-stroke" 
                placeholder="search note..."

            />

            <img 
                src={CloseIcon} 
                alt="Clear Icon" 
                onClick={() => dispatch({type: "clearSearchQuery"})}
                className={state.isClearSearchQueryIconVisible ? "search-bar__clear-icon" : "search-bar__clear-icon hidden"}  
            />
        </div>
    );
};

export default SearchBar;