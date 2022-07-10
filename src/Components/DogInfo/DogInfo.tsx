import React, {useEffect, useState} from "react";
import "./DogInfo.css";
import {DogButton} from "../DogButton/DogButton";
import {DogEntity} from "types";
import {useParams} from "react-router-dom";


export const DogInfo = () => {

    const [dog, setDog] = useState<DogEntity | null>(null);
    const params = useParams();
    useEffect(() => {
        (async () =>{
            const res = await fetch(`http://localhost:3001/dogs/${params.id}`);
            const dogInfo = await res.json();
            setDog(dogInfo);
        })();
    }, []);

    if (dog === null) {
        return <p>Proszę czekać...</p>
    }

    return (
        <>
            <div className="dog-info">
                <p className="dog-name">{dog.name}</p>
                <img src="https://cdn.pixabay.com/photo/2019/01/05/14/54/dog-3915191_960_720.jpg" alt="dog"/>
                <div className="info">
                    <p className="description">{dog.description}</p>
                    <p className="dog-city">Miasto: {dog.city}</p>
                    <DogButton to="/adopter" text="ADOPTUJ MNIE!"/>
                </div>

            </div>
        </>
    )
}
