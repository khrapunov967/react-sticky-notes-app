import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeQueryHandler } from "../../../store/searchSlice";
import SearchIcon from "../../../assets/icons/search-icon.svg";
import CloseIcon from "../../../assets/icons/close-icon.svg";
import "./SearchBar.scss";

const SearchBar = () => {

    const {query, isClearIconVisible} = useSelector(state => state.searchReducer);
    const dispatch = useDispatch();

    return (
        <div className="search-bar">
            <img 
                src={SearchIcon} 
                alt="Search Icon" 
                className="search-bar__search-icon"
            />

            <input 
                value={query}
                onChange={(e) => dispatch(changeQueryHandler({value: e.target.value}))}
                type="text" 
                name="search-stroke" 
                className="search-bar__search-stroke" 
                placeholder="search note..."

            />

            <img 
                src={CloseIcon} 
                alt="Clear Icon" 
                onClick={(e) => dispatch(changeQueryHandler({value: ""}))}
                className={isClearIconVisible ? "search-bar__clear-icon" : "search-bar__clear-icon hidden"}  
            />
        </div>
    );
};

export default SearchBar;