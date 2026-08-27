import React, { useState } from "react";
import './App.css';
import Formulario from "./components/Formulario/Formulario";
import Area from "./components/Area/Area";

const SECOES = ["Computadores", "Acessórios", "Impressoras", "Games", "Gadgets"];

function App() {
  const [produtos, setProdutos] = useState([]);

  const adicionarProduto = (produto) => {
    setProdutos([...produtos, produto]);
  }

  return (
    <>
      <header className="app-header">
        <div className="app-header-inner">
          <span className="app-logo">Loja de Informática</span>
          <nav className="app-nav">
            {SECOES.map((secao, index) => (
              <a key={index} href={`#${secao}`}>{secao}</a>
            ))}
          </nav>
        </div>
      </header>

      <div className="app">
        <Formulario aoAdicionarProduto={adicionarProduto} />

        {SECOES.map((secao, index) => (
          <Area
            key={index}
            nome={secao}
            produtos={produtos.filter(p => p.secao === secao)}
          />
        ))}
      </div>
    </>
  )
}

export default App;
