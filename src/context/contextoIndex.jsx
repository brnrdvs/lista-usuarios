import { createContext, useCallback, useEffect, useState } from "react";

export const contextoIndex = createContext({});

const contextoInicial = () => {
	const localData = localStorage.getItem("favoritos");

	if (!localData) { return []; }

	return JSON.parse(localData);
};

export const Provedor = ({children}) => {
	const [favoritos, setFavoritos] = useState(contextoInicial);

	const adicionar = useCallback((item) => {
		setFavoritos([...favoritos, item.id]);
	}, [favoritos]);

	const remover = useCallback((item) =>{
		const filtrar = favoritos.filter((id) => id !== item.id);
		setFavoritos(filtrar);
	}, [favoritos]);

	const set = useCallback((items) => {
		setFavoritos(items);
  }, []);

  useEffect(() =>{
	localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  return (
	<contextoIndex.Provider value={{favoritos, adicionar, remover, set}}>
		{ children }
	</contextoIndex.Provider>
  );
};
