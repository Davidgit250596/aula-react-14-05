import { useState } from "react";
import "./Botao2.css";


export default function Botao2 () {
    const [clique, setClique] = useState (false);

    function alternarEstado () {
        setClique(!clique)

    }return(

        <button className={clique ? "botao-verde" : "botao-vermelho"} onClick ={alternarEstado} > {clique ? "Verdade" : "Falso"} </button>
        );
    }
