import React, {SyntheticEvent, useState} from "react";
import "./FormAddDogForAdoption.css";
import {DogButton} from "../DogButton/DogButton";

export const FormAddDogForAdoption = () => {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');

    const [dog, setDog] = useState({
        name: '',
        description: '',
        city: '',
        phone: '',
    });

    const sendForm = async (e: SyntheticEvent) => {
        e.preventDefault();

        console.log(dog);

        setLoading(true);

        try {
            const res = await fetch("http://localhost:3001/dogs/add", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...dog
                }),
            });
            const dogData= await res.json();
            setId(dogData.id);


        } finally {
            setLoading(false);
        }

    }

    const updateDog = (key: string, value: any) => {
        setDog(dog => ({
            ...dog,
            [key]: value,
        }));
    };


    if (loading) {
        return <h2>Proszę czekać...</h2>
    }

    if (id) {
        return (
            <div className="thank-you-info">
                <h2> Pies o imieniu: {dog.name} został pomyślnie dodany do naszej bazy! Będziemy kontaktować się przez wysłany numer telefonu, jeśli znajdziemy nowego opiekuna dla {dog.name}. Dziękujemy! </h2>
                <DogButton to="/" text="Powrót do strony głównej"/>
            </div>
        )
    }


    return (
        <form onSubmit={sendForm} action="" className="form-add-a-dog" >
            <h2>Oddaj psa do adopcji:</h2>
            <p>
                <label>
                    Imię psa: <br/>
                    <input
                        type="text"
                        name="name"
                        value={dog.name}
                        required
                        maxLength={50}
                        onChange={e => updateDog('name', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Opis psa (możesz dodać, dlaczego musisz oddać zwierzę): <br/>
                    <input
                        type="text"
                        name="description"
                        value={dog.description}
                        required
                        maxLength={65535}
                        onChange={e => updateDog('description', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Miasto: <br/>
                    <input
                        type="text"
                        name="city"
                        value={dog.city}
                        required
                        maxLength={50}
                        onChange={e => updateDog('city', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Telefon kontaktowy: <br/>
                    <input
                        type="tel"
                        name="phone"
                        value={dog.phone}
                        required
                        maxLength={9}
                        minLength={9}
                        onChange={e => updateDog('phone', e.target.value)}
                    />
                </label>
            </p>

            <button type="submit" className="sub-button">Zapisz!</button>
        </form>

    )


}
