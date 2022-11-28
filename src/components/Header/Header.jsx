import React from "react";
import { useDispatch } from "react-redux";
import { showModal } from "../../store/modalSlice";
import ButtonWithShadow from "../UI/ButtonWithShadow/ButtonWithShadow";
import SearchBar from "../UI/SearchBar/SearchBar";
import "./Header.scss";

const Header = () => {

    const dispatch = useDispatch();

    return (
        <header className="header">
            <p className="header__title">Notes App</p>

            <div className="container">
                <SearchBar 
                    onChange={(e) => {}}
                />

                <ButtonWithShadow 
                    title={"New note"}
                    onClick={() => dispatch(showModal())}
                />
            </div>
        </header>
    );
};

export default Header;