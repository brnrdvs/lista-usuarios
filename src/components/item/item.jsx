import {useNavigate} from "react-router-dom";


function Item ( { item } ) {
    const navegar = useNavigate();

    const clicar = () => {
        navegar(`/detalhes/${item.id}`);
    };

    return (
        <li>
            <p>NOME: { item.nome }</p>
            <button type="button" onClick={clicar}>VER DETALHES</button>
        </li>
    );
};

export default Item;
