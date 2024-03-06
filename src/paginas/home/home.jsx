import { List } from "../../components";
import { useEffect, useState } from "react";
import "./home.css";

const Home = () => {
	const [dados, altDados] = useState([]);

	const buscarMaisDados = async(data) => {
		const promises = data.map ((dados) => {
			return fetch(dados.url).then((response)=>response.json());
		});

		Promise.all(promises).then((results)=>{
			altDados(results);
		});
	};

	const buscarDados = async () => {
		await fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
			.then((response) => response.json())
			.then((data) => { buscarMaisDados(data.results); });
	};

	useEffect(() => {
		buscarDados();
	}, []);

    return(
			<div>
				<div className="inicial">
					<h1>Página inicial</h1>
				</div>
            <List items={dados}/>
        </div>
    );
};

export default Home;
