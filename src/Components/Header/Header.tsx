import React from 'react';
import './Header.css';


export const Header = () => {
    return (
        <header>
            <div className="title">
                <strong>Adopt a dog</strong>
                <i className="fa-solid fa-paw"></i>
            </div>
            <form className="search" >
                <input type="text"/>
                <button className="search-button"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>

        </header>
    )
}
