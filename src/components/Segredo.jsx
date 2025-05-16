import { useState } from "react";
import "./Segredo.css"



export default function Segredo () {
    const [revele, setRevele] = useState(false)

    function revelarSegredo () {
        setRevele(!revele)
    }return (
        <div className="divSegredo">
        <p>{revele ? "segredo revelado" : null}</p>
        <button className={revele ? "Com Segredo" : "Mostrar Segredo" } onClick={revelarSegredo}> {revele ? "Não Revelar" : "Revelar Segredo" } </button>
        </div>
    );
}