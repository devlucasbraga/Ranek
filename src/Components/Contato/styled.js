import styled from "styled-components";

export const ContatoContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
export const ListaContato = styled.ul`
  padding: 0;
  list-style: none;
  li {
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 0.8rem;
    &::before {
      content: "";
      display: inline-block;
      width: 10px;
      height: 2px;
      background: #ddd;
      margin-right: 10px;
    }
  }
`;
