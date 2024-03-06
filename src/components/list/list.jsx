import Item from "../item";
import "./lista.css";

function List({items = [] }) {
    const map=items.map((item) => {
        return (
            <Item key={item.id} item={item} />
        );
    });

    return (
        <div className="lista-caixa">
            <ul className="lista">
                {map}
            </ul>
        </div>
    );
}

export default List;
