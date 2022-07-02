import React from "react";
import './FormAdoption.css';
import {Header} from "../Header/Header";
import {DogButton} from "../DogButton/DogButton";

export const FormAdoption = () => {
    return (
        <>
            <Header/>
            <form className="form-adopt">
                <h2>Wypełnij formularz, a my się z Tobą skontaktujemy:</h2>
                <p>
                    <label>
                        Imię i nazwisko: <br/>
                        <input
                            type="text"
                            name="name"
                            required
                            maxLength={200}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Email: <br/>
                        <input
                            type="email"
                            name="email"
                            required
                            maxLength={345}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Telefon: <br/>
                        <input
                            type="tel"
                            name="phone"
                            required
                            maxLength={9}
                        />
                    </label>
                </p>
                <DogButton text="ADOPTUJ!"/>
            </form>
        </>

    )
}
