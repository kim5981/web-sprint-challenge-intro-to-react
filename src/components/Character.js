// Write your Character component here

import styled from "styled-components";

export default function Character (props) {

    const { characters } = props;

    const BUTTON = styled.button`
        textDecoration: none;
        border: none;
        background: none;
        font-size: 1.5rem;
        color: rgb(234,163,255);
        text-shadow: 2px 6px 12px rgba(218, 254, 255, 0.88) ;
        font-family: 'Press Start 2P';
        padding: 2%;
        line-height: 1;
        margin: 5%;
    `

   return (
    <>
    {
        characters.map( character => {
            return <BUTTON> { character.name }</BUTTON>
        } )
    }
    </>
   )
    }