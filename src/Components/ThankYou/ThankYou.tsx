import React from "react";
import './ThankYou.css';
import {Header} from "../Header/Header";
import {DogButton} from "../DogButton/DogButton";

export const ThankYou = () => {
    return (
        <div className="thank-you">
            <Header/>
            <p>Dziękujemy! Skontaktujemy się z Państwem jak najszybciej!</p>
            <DogButton text="Powrót do strony głównej"/>
        </div>


)
}
