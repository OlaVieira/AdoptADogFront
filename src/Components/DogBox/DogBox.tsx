import React from "react";
import './DogBox.css';
import {DogButton} from "../DogButton/DogButton";

export const DogBox = () => {
    return (
        <div className="dog-box">
            <p className="dog-name">Imie</p>
            <img src="https://cdn.pixabay.com/photo/2019/01/05/14/54/dog-3915191_960_720.jpg" alt="dog"/>
            <DogButton text="Poznaj imię"/>

        </div>
    )
}
