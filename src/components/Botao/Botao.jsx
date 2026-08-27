import React from "react";
import './Botao.css';

const Botao = (props) => {
    return (
        <button type="button" className="botao" onClick={props.aoClicar}>
            {props.children}
        </button>
    )
}

export default Botao;
