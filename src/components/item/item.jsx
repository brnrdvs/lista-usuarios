import {useNavigate} from "react-router-dom";
import "./item.css";
import Heart from "../../components/Heart";

function Item ( { item } ) {
    const navegar = useNavigate();

	 console.log(item);

    const clicar = () => {
        navegar(`/detalhes/${item.id}`);
    };

    return (
        <li className="item-lista">
				<div className="imagem-caixa">
					<img className="imagem" alt={item.name} src={item.sprites.other["official-artwork"].front_default} />
				</div>
            <p className="item-nome">{ item.name }</p>
				< div className="lista-coracao">
					<Heart/>
				</div>
        </li>
    );
};

export default Item;
