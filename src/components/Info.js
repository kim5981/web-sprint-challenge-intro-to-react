import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Info (props) {
    const { character } = props

    const nav = useNavigate()

    const [name, setName] = useState("test")

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
    <div>
    <img alt="character"/>
    <h1>{name}</h1>
    <p>info lorem ipsum info about character ipsum lorem</p>
        <button onClick={ () => nav("/") }>home</button>
    </div>
        
        </>
        
    )}
