import React, {useEffect, useState} from "react";
import "./ShelterInfo.css";
import {DogButton} from "../DogButton/DogButton";
import {ShelterEntity} from "types";
import {useParams} from "react-router-dom";


export const ShelterInfo = () => {

    const [shelter, setShelter] = useState<ShelterEntity | null>(null);
    const params = useParams();
    useEffect(() => {
        (async () =>{
            const res = await fetch(`http://localhost:3001/shelters/${params.id}`);
            const dogInfo = await res.json();
            setShelter(dogInfo);
        })();
    }, []);

    if (shelter === null) {
        return <p>Proszę czekać...</p>
    }

    return (
        <>
            <div className="shelter-info">
                <p className="shelter-name">{shelter.name}</p>
                <img src="https://img.freepik.com/free-photo/side-view-person-holding-dog-s-paw_23-2148683017.jpg?t=st=1657725698~exp=1657726298~hmac=59ceb7eb2a9e4162a786ac5fa0b5b2738e49de82b6210d985bfd787ce4772119&w=900" alt="shelter"/>
                <div className="info">
                    <p>Email:</p>
                    <p className="shelter-email">{shelter.email}</p>
                    <p>Telefon:</p>
                    <p className="shelter-phone">{shelter.phone}</p>
                    <p>Adres:</p>
                    <p className="shelter-address">{shelter.address}</p>
                    <br/>
                    <DogButton to="/shelters" text="Powrót"/>
                </div>

            </div>
        </>
    )
}
