import React from "react";
import {DogButton} from "../DogButton/DogButton";
import './About.css'

export const About = () => {
    return (
        <div className="about-us">
            <h2>Adopt a dog</h2>
            <div className="about-description">
                <p>Jesteśmy firmą, która współpracuje z wieloma schroniskami z całej Polski.</p>
                <br/>
                <p>Jeśli masz ochotę adoptować pieska, tutaj znajdziesz ogłoszenia, które mogą Cię zainteresować</p>
                <p>Wybierz pieska, który Ci się podoba i wyślij formularz, a my się odezwiemy</p>
                <br/>
                <p>Zawsze możesz skontaktować się z nami osobiście:</p>
            </div>

            <DogButton to="/contact" text="Kontakt"/>
        </div>
    )
}
