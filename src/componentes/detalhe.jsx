import { useParams } from "react-router-dom";
import card from '../Components/card';

export defalt function detalhe() {

    const { id } = Useparams();
    const lista = JSON.parse( localStorage.getitem("Lista"));

    const atividade = lista.filter( (objeto)) => {
        if(objeto.id == id){
            return objeto;
        }
        return null
    }
}