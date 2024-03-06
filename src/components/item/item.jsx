import {useNavigate} from "react-router-dom";
import "./item.css";

function Item ( { item } ) {
    const navegar = useNavigate();

	 console.log(item);

    const clicar = () => {
        navegar(`/detalhes/${item.id}`);
    };

    return (
        <li className="item-lista">
            <p className="item-nome">{ item.name }</p>
				<div className="imagem-caixa">
					<img className="imagem" alt={item.name} src={item.sprites.other["official-artwork"].front_default} />
				</div>
        </li>
    );
};

export default Item;
