import React from "react";
import "./SearchBar.scss";

const SearchBar = ({placeholder, searchValue, setSearchValue}) => {

    return (
        <div className="search-bar">
            <div className="search-bar__search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"/></svg>
            </div>

            <input 
                placeholder={placeholder} 
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                type="text" 
                name="search-stroke" 
                className="search-bar__search-stroke" 
            />

            <div className={`search-bar__clear-icon ${searchValue ? "" : "hidden"}`} onClick={() => setSearchValue("")}>
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>
            </div>
        </div>
    );
};

export default SearchBar;