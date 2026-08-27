import React from "react";
import './CampoTexto.css';

const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input
                type={props.tipo || "text"}
                value={props.valor}
                onChange={props.aoMudar}
                min={props.min}
                step={props.step}
            />
        </div>
    )
}

export default CampoTexto;
