import React, {useContext, useEffect, useState} from 'react';
import './Home.css';
import {SearchContext} from "../../contexts/search.context";
import { LittleDogInfoEntity } from 'types';
import {DogBox} from "./DogBox";


export const Home = () => {
    const {searchCity} = useContext(SearchContext);
    const [dogs, setDogs] = useState<LittleDogInfoEntity[]>([]);


    useEffect(() => {
        (async () =>{
            const res = await fetch(`http://localhost:3001/dogs/search/${searchCity}`);
            const data = await res.json();
            setDogs(data);
        })();
    }, [searchCity]);

    return (

            <div className="background">
                {
                    dogs.map(dog => (
                        <div key={dog.id} className="dog-box">
                            <DogBox id={dog.id}/>
                        </div>
                    ))
                }
            </div>
        );
};
