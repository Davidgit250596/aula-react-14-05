import FormContato from "./components/FormContato";
import Destinos from "./pages/Destinos";
import Historia from "./components/Historia";
import Ifood from "./assets/Ifood.png"
import Curriculo from "./components/Curriculo";
import fotoLaniutu from "./assets/imgLaniutu.png";
import fotoLuan from "./assets/imgLuan-removebg-preview.png";
import fotoEu from "./assets/imgEu.jpg";
import AlunoCard from "./components/AlunoCard";
import "./App.css"
// import Contador from "./components/Botao";
// import Botao from "./components/Botao";
import Botao2 from "./components/Botao2";
import Segredo from "./components/segredo";

export default function App () {
  return (
    <div className="divgeral">
    {/* <Destinos/>
    <FormContato />
    <Historia /> */}
    {/* <Curriculo nome="David" atuação="Motoboy" habilidades="Rapidez na entrega" img={Ifood} /> */}
      {/* <AlunoCard nome="Laniutu" idade="35 anos" curso="Full Stack" img={fotoLaniutu} />
      <AlunoCard nome="David" idade="28 anos" curso="Full Stack" img={fotoEu}  />
      <AlunoCard nome="Luan" idade="23 anos" curso="Full Stack" img={fotoLuan} /> */}
    {/* <Botao2 /> */}
    <Segredo />
    </div>
    
  );
}