import React from "react";
import "./Botoes.css";




export default function Botoes(props){


    return(
        <button className={props.tipo} value={props.value} onClick={props.event}>{props.value}</button>
    )
}