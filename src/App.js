import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from "./components/Welcome"
import Character from './components/Character';
import Info from "./components/Info"

import axios from "axios"
import styled from "styled-components"


const App = (props) => {
  

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

const H1 = styled.h1`
margin: 5% 15% 0 12%;
display:flex;
justify-content: center;
align-content: center;
width: 75%;
font-family: "Bungee", cursive;
font-size: 5.5rem;
line-height: 1;
color: rgba(255, 64, 251, 0.61);
text-shadow: 2px 6px 15px rgba(218, 254, 255, 0.88) ;

`

const [ characters, setCharacters ] = useState( [] );

  useEffect( () => {
    axios.get("https://swapi.dev/api/people/")
    .then(res => {
      setCharacters(res.data);
    })
    .catch( err => console.error(err) )
  }, [] )

  return (
    <div className="App">
      <H1 className="Header">STAR WARS: REVENGE OF REACT</H1>
      <Router>
      <Routes>
        <Route path="/" element={< Welcome characters={ characters }/>} />
        <Route path="/menu" element={ <Character/> } />
        <Route path="/char-info"  element={ <Info /> }/>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
