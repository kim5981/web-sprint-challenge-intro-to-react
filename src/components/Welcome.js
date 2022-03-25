import styled from "styled-components";

export default function Welcome () {

    const DivStyle = styled.div `
    width: 50%;
    background-color: rgb(47, 5, 81, 0.77);
    border-radius: 10px;
    padding: 4%;
    margin: 10% 20% 20% 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    `

    const Button = styled.button`
    text-decoration: none;
    border: none;
    background-color: Transparent;
    background-repeat: no-repeat;
    font-family: font-family: "Bungee", cursive;
    font-size: 1.1rem;
    color: rgba(255, 64, 251, 0.61);
    `

    return (

        <DivStyle>
            <h1>Character Selector</h1>
        <Button> Choose a Character </Button>
    </DivStyle>
    )
}