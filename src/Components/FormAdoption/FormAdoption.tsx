import React, {SyntheticEvent, useState} from "react";
import './FormAdoption.css';
import {Header} from "../Header/Header";
import {DogButton} from "../DogButton/DogButton";


export const FormAdoption = () => {

    const [person, setPerson] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const sendForm = (e: SyntheticEvent) => {
        e.preventDefault();

        console.log(person);

    }


    return (
            <>
                <form className="form-adopt" onSubmit={sendForm}>
                    <h2>Wypełnij formularz, a my się z Tobą skontaktujemy:</h2>
                    <p>
                        <label>
                            Imię i nazwisko: <br/>
                            <input
                                type="text"
                                name="name"
                                value={person.name}
                                required
                                maxLength={200}
                                onChange={e => setPerson(person => ({
                                    ...person,
                                    name: e.target.value,
                                }))}
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            Email: <br/>
                            <input
                                type="email"
                                name="email"
                                value={person.email}
                                required
                                maxLength={345}
                                onChange={e => setPerson(person => ({
                                    ...person,
                                    email: e.target.value,
                                }))}
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            Telefon: <br/>
                            <input
                                type="tel"
                                name="phone"
                                value={person.phone}
                                required
                                maxLength={9}
                                onChange={e => setPerson(person => ({
                                    ...person,
                                    phone: e.target.value,
                                }))}
                            />
                        </label>
                    </p>
                    <DogButton text="ADOPTUJ!"/>
                </form>
            </>

        )


}
