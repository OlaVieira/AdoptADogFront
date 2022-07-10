import React, {useContext, useEffect, useState} from 'react';
import './Home.css';
import {SearchContext} from "../../contexts/search.context";
import {DogButton} from "../DogButton/DogButton";
import { LittleDogInfoEntity } from 'types';

export const Home = () => {
    const {searchCity} = useContext(SearchContext);
    const [dogs, setDogs] = useState<LittleDogInfoEntity[]>([]);

    useEffect(() => {
        (async () =>{
            const res = await fetch(`http://localhost:3001/dogs/`);
            const data = await res.json();
            setDogs(data);
        })();
    }, []);

    return (
            <div className="background">
                {
                    dogs.map(dog => (
                        <div key={dog.id} className="dog-box">
                            <p className="dog-name">{dog.name}</p>
                            <img src="https://cdn.pixabay.com/photo/2019/01/05/14/54/dog-3915191_960_720.jpg" alt="dog"/>
                            <p className="dog-city">Miasto: {dog.city}</p>
                            <DogButton to={`/dogs/${dog.id}`} text={dog.name}/>
                        </div>
                    ))
                }
            </div>
    )
}
