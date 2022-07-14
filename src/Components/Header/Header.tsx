import React, {SyntheticEvent, useContext, useState} from 'react';
import './Header.css';
import {SearchContext} from "../../contexts/search.context";
import {Link} from "react-router-dom";


export const Header = () => {
    const {searchCity, setSearchCity} = useContext(SearchContext);
    const [valueFromInput, setValueFromInput] = useState(searchCity);

    const setSearchLocState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearchCity(valueFromInput);
    }

    return (
        <header>
            <Link to="/" className="to-home">
                <div className="title">
                    <strong>Adopt a dog</strong>
                    <i className="fa-solid fa-paw"></i>
                </div>
            </Link>

            <Link to="/about" className="to-home">
                <div className="about">
                    <strong>O nas</strong>
                </div>
            </Link>

            <Link to="/contact" className="to-home">
                <div className="contact">
                    <strong>Kontakt</strong>
                </div>
            </Link>

            <form className="search"
                  onSubmit={setSearchLocState}>
                <input
                    type="text"
                    placeholder="Wpisz miasto..."
                    value={valueFromInput}
                    onChange={e => setValueFromInput(e.target.value)}
                />
                <button className="search-button"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>

        </header>
    );
};
