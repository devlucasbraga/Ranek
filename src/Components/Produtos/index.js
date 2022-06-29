import React from "react";
import { Link } from "react-router-dom";
import { ProdutosContainer, Titulo } from "./styled";
import Head from "../Head";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((res) => res.json())
      .then((json) => setProdutos(json));
  }, []);


  if (produtos === null) return null;
  return (
    <ProdutosContainer className="animeLeft">
      <Head title="Ranek" description="Descrição do site Ranek" />
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <Titulo>{produto.nome}</Titulo>
        </Link>
      ))}
    </ProdutosContainer>
  );
};

export default Produtos;
