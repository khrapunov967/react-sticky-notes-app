import React from "react";
import Button from "../../UI/Button/Button";
import SearchBar from "../../UI/SearchBar/SearchBar";
import "./HeaderSection.scss";

const HeaderSection = ({setIsModalVisible, notes, setNotes, searchValue, setSearchValue}) => {

    return (
        <header className="header-section">
            <SearchBar 
                placeholder={"Search note..."}
                notes={notes}
                setNotes={setNotes}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <Button 
                buttonName={"Create Note"} 
                onClick={() => setIsModalVisible(true)}
            />
        </header>
    );
};

export default HeaderSection;