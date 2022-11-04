import React from "react";
import Button from "../UI/Button/Button";
import SearchBar from "../UI/SearchBar/SearchBar";
import "./HeaderSection.scss";

const HeaderSection = ({setIsModalVisible, searchQuery, setSearchQuery}) => {

    return (
        <header className="header-section">
            <SearchBar 
                placeholder={"Search note..."}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            <Button 
                buttonName={<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Add New Note</title><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 176v160M336 256H176"/></svg>} 
                onClick={() => setIsModalVisible(true)}
            />
        </header>
    );
};

export default HeaderSection;