import React, { useState, useEffect } from 'react';
import Welcome from "./components/Welcome"
import axios from "axios"
import styled from "styled-components"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

const H1 = styled.h1`
margin: 10% 10% 0 10%;
display:flex;
justify-content: center;
align-content: center;
width: 80%;
font-family: "Bungee", cursive;
font-size: 5.5rem;
line-height: 1;
color: rgba(255, 64, 251, 0.61);
text-shadow: 2px 6px 15px rgba(218, 254, 255, 0.88) ;

`


  useEffect( () => {
    axios.get("https://swapi.dev/api/people")
    .then(res => {
      console.log(res.data);
    })
    .catch( err => console.error(err) )
  }, [] )

  return (
    <div className="App">
      <H1 className="Header">STAR WARS: REVENGE OF REACT</H1>

      <Welcome/>

    </div>
  );
}

export default App;
