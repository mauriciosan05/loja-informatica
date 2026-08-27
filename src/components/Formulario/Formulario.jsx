import React, { useState } from "react";
import './Formulario.css';
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import CampoTexto from "../CampoTexto/CampoTexto";
import Botao from "../Botao/Botao";

const SECOES = ["Computadores", "Acessórios", "Impressoras", "Games", "Gadgets"];
const MARCAS = ["HP", "Dell", "Positivo", "Asus", "Xing Ling genérico"];

const Formulario = (props) => {
    const [secao, setSecao] = useState("");
    const [marca, setMarca] = useState("");
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [condicao, setCondicao] = useState("Novo");
    const [erro, setErro] = useState("");

    const handleInserirProduto = () => {
        if (!secao || !marca || !nome || !preco) {
            setErro("Preencha Seção, Marca, Nome e Preço antes de inserir.");
            return;
        }

        if (Number(preco) <= 0) {
            setErro("O preço precisa ser maior que zero.");
            return;
        }

        const produto = { secao, marca, nome, preco, condicao };
        props.aoAdicionarProduto(produto);

        setSecao("");
        setMarca("");
        setNome("");
        setPreco("");
        setCondicao("Novo");
        setErro("");
    }

    return (
        <div className="formulario">
            <ListaSuspensa
                label="Seção:"
                itens={SECOES}
                valor={secao}
                aoMudar={(e) => setSecao(e.target.value)}
            />
            <ListaSuspensa
                label="Marca:"
                itens={MARCAS}
                valor={marca}
                aoMudar={(e) => setMarca(e.target.value)}
            />
            <CampoTexto
                label="Nome:"
                valor={nome}
                aoMudar={(e) => setNome(e.target.value)}
            />
            <CampoTexto
                label="Preço:"
                tipo="number"
                min="0"
                step="0.01"
                valor={preco}
                aoMudar={(e) => setPreco(e.target.value)}
            />

            <div className="campo-condicao">
                <label>
                    <input
                        type="radio"
                        name="condicao"
                        value="Novo"
                        checked={condicao === "Novo"}
                        onChange={(e) => setCondicao(e.target.value)}
                    />
                    Novo
                </label>
                <label>
                    <input
                        type="radio"
                        name="condicao"
                        value="Usado"
                        checked={condicao === "Usado"}
                        onChange={(e) => setCondicao(e.target.value)}
                    />
                    Usado
                </label>
            </div>

            {erro && <p className="formulario-erro">{erro}</p>}

            <Botao aoClicar={handleInserirProduto}>Inserir Produto</Botao>
        </div>
    )
}

export default Formulario;
