import React from "react"
import { useNavigate} from "react-router-dom"

export default function Info (props) {
    const { character } = props

    const nav = useNavigate
    
        return( 
    <>
        <h1>test</h1>
        <button onClick={() => nav("/")}>home</button>
        </>
        
    )}
