import React from "react";
import "./DogInfo.css";
import {Header} from "../Header/Header";
import {DogButton} from "../DogButton/DogButton";

export const DogInfo = () => {
    return (
        <>
        <Header/>
        <div className="dog-info">
            <p className="dog-name">Name</p>
            <img src="https://cdn.pixabay.com/photo/2019/01/05/14/54/dog-3915191_960_720.jpg" alt="dog"/>
            <div className="info">
                <p className="description">Lorem ipsum ksbkjnn wjbfjwbefw fjwbkjfw fjefkjwebf wbhjfbjwbefw kbefjwbf bjebf wjb bfjw efbehb fwebf whebf ek  f wefw e jhb sjhbks sdkjjnkj  djdnkwj jnwjk wejnkwe wkjenkwje kjwenjkw wkjenjkwe kjenjkwff</p>
                <p className="dog-city">Miasto: miasto</p>
                <DogButton text="ADOPTUJ MNIE!"/>
            </div>

        </div>
        </>
    )
}
