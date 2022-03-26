import styled from "styled-components";
import React, { useState, useEffect } from "react"
import Character from "./Character"

export default function Welcome (props) {

    // -------------------------------------- STYLING -------------------------------------
    const DivStyle = styled.div `
    width: 60%;
    background-color: rgb(47, 5, 81, 0.77);
    border-radius: 10px;
    padding: 5%;
    margin: 10% 20% 10% 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    `

    const Button = styled.button`
    width: 20%;
    padding: 2%;
    margin: 0 5% 0 5%;
    text-decoration: none;
    border: none;
    border-radius: 5%;
    background-color: rgba(255, 163, 253, 0.77);
    font-family: font-family: "Bungee", cursive;
    font-size: 1.1rem;
    color: rgb(47, 5, 81, 0.77));
    `

    const CharacterSelector = styled.h1`
    padding: 5%;
    line-height: 1.3;
    text-shadow: 2px 5px 15px rgba(255, 163, 253, 0.77) ;
    `

    const ButtonsDiv = styled.div`
        display: flex;
        justify-content: center;
        margin-bottom: 80%;
        margin: 0 10% 0 10%;
    `

    // ------------------------------------------ FN'S + JS --------------------------------------

    
    const { characters } = props;
    const [ names, setNames ] = useState("");
    const welcome = "Choose Character"

    

    const [divText, setDivText] = useState(welcome);
    //grabs the div

// ------------------------------------     render to dom   ---------------------------------
    return (
    <>
        <DivStyle>
           
            <CharacterSelector id="charSelect"> {divText} </CharacterSelector>
        
          </DivStyle>
    
   
    <ButtonsDiv>
        <Button onClick={ () => {
                setDivText(<Character characters={ characters }/>);
           } } >
                menu
            </Button>

            <Button onClick={ () => {
                setDivText(welcome)
            } }> reset </Button>
    </ButtonsDiv>
    </>
    )
}