import "../components/AlunoCard.css"
function AlunoCard (props) {
    return(
        <div className="divtoda">
        <h2>{props.nome}</h2>
        <h3>{props.idade}</h3>
        <h2>{props.curso}</h2>
        <img src={props.img} alt="" width={400} />
        </div>
    );
}
export default AlunoCard