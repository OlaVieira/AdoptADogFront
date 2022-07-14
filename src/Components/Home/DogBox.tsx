import React, {useEffect, useState} from "react";
import {DogEntity} from 'types';
import {DogButton} from "../DogButton/DogButton";
import './Home.css';

interface Props {
    id: string;
}

export const DogBox = (props: Props) => {
    const [dog, setDog] = useState<DogEntity | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/dogs/${props.id}`);
            const data = await res.json();

            setDog(data);
        })();
    }, []);

    if (dog === null) {
        return <p>Prosimy poczekać...</p>
    }

    return  <>
        <p className="dog-name">{dog.name}</p>
        <img src="https://cdn.pixabay.com/photo/2019/01/05/14/54/dog-3915191_960_720.jpg" alt="dog"/>
        <p className="dog-city">Miasto: {dog.city}</p>
        <DogButton to={`/dogs/${dog.id}`} text={dog.name}/>

    </>;


}
