import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Detalhes = () => {
    const parametros=useParams();

    const [user, setUser]=useState(undefined);

    useEffect(() => {
        const { id } = parametros;
        const resultado = pessoas.find((element) => element.id === id);

        if (!resultado) {
            setUser(null);
            return;
        }
        setUser(resultado);
    }, [parametros]);

    return(
        <div>
            <h1>Detalhes</h1>

        { user === null && (
            <div>
                <p>Não encontrado</p>
            </div>
        )}

        { user && (
            <div>
                <img alt={user.imagem.alt} src={user.imagem.src} width="100px" height="auto"/>
                <h2>{user.nome}</h2>
                <p>{user.descricao}</p>
            </div>
        )}

        <Link to="/">Voltar</Link>
        </div>
    );
};

export default Detalhes;
