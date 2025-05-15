
import "./CardsDestino.css";

export default function CardDestino(props) {

    return (
        <>
            
                <h1 className="textoguara" >{props.nome}</h1>
                <img src={props.img} alt="" width={600} />
                <p>{props.descrição}</p>
            

        </>
    );
}