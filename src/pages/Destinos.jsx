import CardDestino from "../components/CardsDestino";
import guara from '../assets/guara.jpg';
import jeri from '../assets/jeri.png';
import canoa from '../assets/canoa.jpeg';


export default function Destinos() {
    return (
        <>
            <CardDestino nome="guara" img={guara} descrição="lugar com um clima bem agradavel e com lugares otimos para visitar"/>
            <CardDestino nome="jeri" img={jeri} descrição="Lugar agradavel com belas praias"/> 
            <CardDestino nome="canoa" img={canoa} descrição="praia com lugares paradisiacos"/> 
        </>
    );
}