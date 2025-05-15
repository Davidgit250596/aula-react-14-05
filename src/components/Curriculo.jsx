import Ifood from '../assets/Ifood.png';
import './Curriculo.css'

function Curriculo (props) {
    return (
        <div className='divtudo'>
        <h2>{props.nome}</h2>
        <h3>{props.atuação}</h3>
        <h4>{props.habilidades}</h4>
        <img src={props.img} alt="" width={200} />
        </div>
    );
}
export default Curriculo