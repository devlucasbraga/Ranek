import React from "react";
import { ContatoContainer, ListaContato } from "./styled";
import foto from "../../img/contato.jpg";
import Head from "../Head/index";

const Contato = () => {
  return (
    <ContatoContainer className="animeLeft">
      <Head title="Ranek | Contato" description='Entre em contato' />
      <img src={foto} alt="Maquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ListaContato>
          <li>lucasbraga_a@outlook.com</li>
          <li>99999-9999</li>
          <li>Rua 13 de maio - 410</li>
        </ListaContato>
      </div>
    </ContatoContainer>
  );
};

export default Contato;
