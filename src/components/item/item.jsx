import { useContext } from "react";
import { contextoIndex } from "../../context";
import "./item.css";
import Heart from "../../components/Heart";

function Item ( { item } ) {

	 const contexto = useContext(contextoIndex);
	 const isFavorite = contexto.favoritos?.includes(item.id) || false;

	 const marcar = () => {
		if (isFavorite) {
			contexto.remover(item);
		} else {
			contexto.adicionar(item);
		}
	 };

    return (
        <li className="item-lista" data-testid={`list-item-${item.id}`}>
				<div className="imagem-caixa">
					<img className="imagem" alt={item.name} src={item.sprites.other["official-artwork"].front_default} />
				</div>
            <p className="item-nome">{ item.name }</p>
				< div className="lista-coracao">
					<Heart
						onClick={marcar}
						selected ={isFavorite}
						testId={`heart-${item.id}`}
					/>
				</div>
        </li>
    );
};

export default Item;
