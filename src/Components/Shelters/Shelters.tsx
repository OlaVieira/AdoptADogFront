import React, {useEffect, useState} from "react";
import "./Shelters.css";
import {DogButton} from "../DogButton/DogButton";
import {LittleShelterInfoEntity} from "types";

export const Shelters = () => {
    const [shelters, setShelters] = useState<LittleShelterInfoEntity[]>([]);

    useEffect(() => {
        (async () =>{
            const res = await fetch(`http://localhost:3001/shelters/`);
            const data = await res.json();
            setShelters(data);
        })();
    }, []);


    return (
        <div>
            <h2 className="background-title">Lista schronisk, z którymi współpracujemy:</h2>
            <div className="background">
                {
                    shelters.map(shelter => (
                        <div key={shelter.id} className="shelter-box">
                            <p>Nazwa schroniska:</p>
                            <p className="shelter-name">{shelter.name}</p>
                            <p>Id schroniska:</p>
                            <p className="shelter-id">{shelter.id}</p>
                            <p>Więcej informacji:</p>
                            <DogButton to={`/shelters/${shelter.id}`} text={shelter.name}/>
                        </div>
                    ))
                }
            </div>
        </div>


    )


}

