import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { contextoIndex } from "../../context";
import "./item.css";
import Heart from "../../components/Heart";

function Item ( { item } ) {
    const navegar = useNavigate();

	 const contexto = useContext(contextoIndex);
	 const isFavorite = contexto.favoritos?.includes(item.id) || false;

    const clicar = () => {
        navegar(`/detalhes/${item.id}`);
    };

	 const marcar = () => {
		if (isFavorite) {
			contexto.remover(item);
		} else {
			contexto.adicionar(item);
		}
	 };

    return (
        <li className="item-lista">
				<div className="imagem-caixa">
					<img className="imagem" alt={item.name} src={item.sprites.other["official-artwork"].front_default} />
				</div>
            <p className="item-nome">{ item.name }</p>
				< div className="lista-coracao">
					<Heart onClick={marcar} selected ={isFavorite}/>
				</div>
        </li>
    );
};

export default Item;
