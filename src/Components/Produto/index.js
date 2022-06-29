import React from "react";
import { useParams } from "react-router-dom";
import { ProdutoContainer, DescricaoProduto } from "./styled";
import Head from "../Head";

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [load, setLoad] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoad(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setError("Um erro ocorreu!");
      } finally {
        setLoad(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (load) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <ProdutoContainer className="animeLeft">
      <Head
        title={` Ranek | ${produto.nome}`}
        description={` Ranek | Esse é um produto: ${produto.nome}`}
      />
      <div>
        {produto.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>
      <DescricaoProduto>
        <h1>{produto.nome}</h1>
        <span>R$ {produto.preco}</span>
        <p>{produto.descricao}</p>
      </DescricaoProduto>
    </ProdutoContainer>
  );
};

export default Produto;
