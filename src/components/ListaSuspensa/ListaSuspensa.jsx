import React from "react";
import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select value={props.valor} onChange={props.aoMudar}>
                <option value="">Selecione...</option>
                {props.itens.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>
        </div>
    )
}

export default ListaSuspensa;
