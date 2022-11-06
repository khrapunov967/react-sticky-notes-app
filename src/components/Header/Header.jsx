import React, { useContext } from "react";
import { Context } from "../../context";
import ButtonWithShadow from "../UI/ButtonWithShadow/ButtonWithShadow";
import SearchBar from "../UI/SearchBar/SearchBar";
import "./Header.scss";

const Header = () => {

    const {dispatch} = useContext(Context);

    return (
        <header className="header">
            <p className="header__title">Notes App</p>

            <div className="container">
                <SearchBar 
                    onChange={(e) => dispatch({type: "changeSearchQueryHandler", payload: e.target.value})}
                />

                <ButtonWithShadow 
                    title={"New note"}
                    onClick={() => dispatch({type: "showModal"})}
                />
            </div>
        </header>
    );
};

export default Header;