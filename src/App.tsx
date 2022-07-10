import React, {useState} from 'react';
import './App.css';
import { SearchContext } from './contexts/search.context';
import {Home} from "./Components/Home/Home";
import {DogInfo} from "./Components/DogInfo/DogInfo";
import {FormAdoption} from "./Components/FormAdoption/FormAdoption";
import {ThankYou} from "./Components/ThankYou/ThankYou";
import {Header} from "./Components/Header/Header";
import {Routes, Route} from "react-router-dom";

export const App = () => {
    const [searchCity, setSearchCity] = useState('');  //stan lokalny ktory jest stringiem bedzie w innych miejscach w kontekscie wykorzystywany

    return (
      <SearchContext.Provider value={{searchCity, setSearchCity}}>
          <Header/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/dogs/:id" element={<DogInfo/>}/>
              <Route path="/adopter" element={<FormAdoption/>}/>
          </Routes>
          <Home/>
      </SearchContext.Provider>


  );
}

