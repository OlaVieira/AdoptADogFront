import React, {SyntheticEvent, useState} from "react";
import './FormAdoption.css';
import {DogButton} from "../DogButton/DogButton";


export const FormAdoption = () => {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');

    const [person, setPerson] = useState({
        firstAndLastName: '',
        email: '',
        phone: '',
        wantedDogs: '',
    });

    const sendForm = async (e: SyntheticEvent) => {
        e.preventDefault();

        console.log(person);

        setLoading(true);

        try {
            const res = await fetch("http://localhost:3001/adopters/add", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...person
                }),
            });
            const personData= await res.json();
            setId(personData.id);


        } finally {
            setLoading(false);
        }

    }

    const updatePerson = (key: string, value: any) => {
        setPerson(person => ({
            ...person,
            [key]: value,
        }));
    };


    if (loading) {
        return <h2>Proszę czekać...</h2>
    }

    if (id) {
        return (
            <div className="thank-you-info">
                <h2>{person.firstAndLastName}, dziękujemy, twoje dane zostały pomyślnie wysłane! Skontaktujemy się z Państwem jak najszybciej! </h2>
                <DogButton to="/" text="Powrót do strony głównej"/>
            </div>
        )
    }


    return (
                <form onSubmit={sendForm} action="" className="form-adopt" >
                    <h2>Wypełnij formularz, a my się z Tobą skontaktujemy:</h2>
                    <p>
                        <label>
                            Imię i nazwisko: <br/>
                            <input
                                type="text"
                                name="firstAndLastName"
                                value={person.firstAndLastName}
                                required
                                maxLength={200}
                                onChange={e => updatePerson('firstAndLastName', e.target.value)}
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
                                onChange={e => updatePerson('email', e.target.value)}
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            Telefon: <br/>
                            <input
                                type="text"
                                name="phone"
                                value={person.phone}
                                required
                                maxLength={9}
                                minLength={9}
                                onChange={e => updatePerson('phone', e.target.value)}
                            />
                        </label>
                    </p>
                    <p>
                         <label>
                             Imię psa bądź imiona psów, które chcesz adoptować: <br/>
                             <input
                                 type="text"
                                 name="wantedDogs"
                                 value={person.wantedDogs}
                                 required
                                 maxLength={50}
                                 onChange={e => updatePerson('wantedDogs', e.target.value)}
                             />
                         </label>
                    </p>

                    <button type="submit" className="sub-button">Adoptuj!</button>
                </form>

        )

}
