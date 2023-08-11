import './app.css'
import { Exemplo } from './Exemplo'
export default function App(){
    const lista = [
        {nome:"Luiz Carlos",idade: 17, cidade:"Nova Andradina"},
        {nome:"Gustavo",idade: 17 ,cidade:"Nova Andradina"},
        {nome:"Bia",idade: 13, cidade:"Nova Andradina"}
    ]
    return (
<div> 
    <h1> hello Word! </h1>
    <Exemplo lista={lista}/>
</div>


    );
}