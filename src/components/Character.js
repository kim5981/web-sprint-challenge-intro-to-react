// Write your Character component here

import styled from "styled-components";

export default function Character (props) {

    const { characters } = props;

    const H2 = styled.h2`
    
        font-size: 1.2rem;
        padding: 1.2%;
        line-height: 1.6;

    `

   return (
    <>
    {
        characters.map( character => {
            return <H2> { character.name }</H2>
        } )
    }
    </>
   )
    }

