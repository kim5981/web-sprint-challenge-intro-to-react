import React, { useState } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import Edit from "../images/poster.jpg"

export default function Info (props) {
    const { character } = props

    const nav = useNavigate()

    const [name, setName] = useState("Character Name")

    const DivStyle = styled.div `
    width: 70%;
    background-color: rgb(47, 5, 81, 0.77);
    border-radius: 15px;
    padding: 3.5% 7% 3.5% 7%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    right: 15%;
    left: 7%;

    `

    const BUTTON = styled.button`
    width: 20%;
    padding: 2%;
    margin: 0 10% 0 10%;
    text-decoration: none;
    border: none;
    border-radius: 5%;
    background-color: rgba(255, 163, 253, 0.77);
    font-family: font-family: "Bungee", cursive;
    font-size: 1.1rem;
    color: rgb(47, 5, 81, 0.77));
    `

    const IMG = styled.img`
    height: 32vh;
    border: solid rgb(168, 79, 171) 8px;
    border-radius: 5px;
    padding-bottom: 2%;
    box-shadow: 2px 2px 10px rgba(218, 254, 255, 0.88);
    `

    if(character === "Luke Skywalker"){
        setName("Luke")
    } else if(character === "C3P0"){
        setName("C-3PO")
    } else if(character === "R2D2"){
        setName("R2-D2")
    } else if(character === "Darth Vader"){
        setName("Darth Vader")
    } else if(character === "Leia Organa"){
        setName("Leia Organa")
    } else if(character === "Owen Lars"){
        setName("Owen Lars")
    }
    
        return( 
    <>
    <DivStyle>
    <IMG alt="placeholder" src={Edit}/>
    <h1>{name}</h1>
    <p>info lorem ipsum info about character Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
        <BUTTON onClick={ () => nav("/") }>home</BUTTON>
    </DivStyle>
        
        </>
        
    )}
