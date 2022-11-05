import React from "react";
import ButtonWithShadow from "../UI/ButtonWithShadow/ButtonWithShadow";
import SearchBar from "../UI/SearchBar/SearchBar";
import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <p className="header__title">Notes App</p>

            <div className="container">
                <SearchBar />
                <ButtonWithShadow title={"New Note"}/>
            </div>
        </header>
    );
};

export default Header;