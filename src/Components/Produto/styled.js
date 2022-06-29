import styled from "styled-components";

export const ProdutoContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  div {
    img {
      margin-bottom: 2rem;
    }
  }
`;

export const DescricaoProduto = styled.div`
  span {
    padding: 0.5rem;
    background: #91fb5d;
    color: #017e01;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 4px;
  }
  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    line-height: 1.2;
  }
`;
