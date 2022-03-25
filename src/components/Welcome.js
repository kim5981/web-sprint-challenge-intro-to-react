import styled from "styled-components";

export default function Welcome () {

    // -------------------------------------- STYLING -------------------------------------
    const DivStyle = styled.div `
    width: 50%;
    background-color: rgb(47, 5, 81, 0.77);
    border-radius: 10px;
    padding: 5%;
    margin: 10% 20% 20% 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    `

    const Button = styled.button`
    width: 25%;
    padding: 2%;
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

    // ------------------------------------------ FN'S + JS --------------------------------------


    const welcome = "Character Selector"



    return (

        <DivStyle>

            <CharacterSelector>{ welcome } </CharacterSelector>
            <Button onClick={ () => {
                document.querySelector("#char").classList.toggle("hidden")
                }} > 
                menu 
            </Button>

    </DivStyle>
    )
}