import React, {SyntheticEvent, useContext, useState} from 'react';
import './Header.css';
import {SearchContext} from "../../contexts/search.context";


export const Header = () => {
    const {searchCity, setSearchCity} = useContext(SearchContext);
    const [valueFromInput, setValueFromInput] = useState(searchCity);

    const setSearchLocState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearchCity(valueFromInput);
    }

    return (
        <header>
            <div className="title">
                <strong>Adopt a dog</strong>
                <i className="fa-solid fa-paw"></i>
            </div>
            <form className="search" onSubmit={setSearchLocState}>
                <input
                    type="text"
                    placeholder="Wpisz miasto..."
                    value={valueFromInput}
                    onChange={event => setValueFromInput(event.target.value)}
                />
                <button className="search-button"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>

        </header>
    )
}
