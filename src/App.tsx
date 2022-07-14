import React, {useState} from 'react';
import './App.css';
import { SearchContext } from './contexts/search.context';
import {Home} from "./Components/Home/Home";
import {DogInfo} from "./Components/DogInfo/DogInfo";
import {FormAdoption} from "./Components/FormAdoption/FormAdoption";
import {Header} from "./Components/Header/Header";
import {Routes, Route} from "react-router-dom";
import {About} from "./Components/About/About";
import {Contact} from "./Components/Contact/Contact";
import {FormAddDogForAdoption} from "./Components/FormAddDogForAdoption/FormAddDogForAdoption";
import {Shelters} from "./Components/Shelters/Shelters";
import {ShelterInfo} from "./Components/ShelterInfo/ShelterInfo";



export const App = () => {
    const [searchCity, setSearchCity] = useState('');
    //stan lokalny ktory jest stringiem bedzie w innych miejscach w kontekscie wykorzystywany

    return (
      <SearchContext.Provider value={{searchCity, setSearchCity}}>
          <Header/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/shelters" element={<Shelters/>}/>
              <Route path="/dogs/:id" element={<DogInfo/>}/>
              <Route path="/shelters/:id" element={<ShelterInfo/>}/>
              <Route path="/adopter/add" element={<FormAdoption/>}/>
              <Route path="/dog/add" element={<FormAddDogForAdoption/>}/>
          </Routes>
      </SearchContext.Provider>

  );
};

