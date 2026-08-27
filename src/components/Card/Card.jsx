import React, { useState } from "react";
import './Card.css';

const LOGOS = {
  "HP": "/logos/logo-hp.png",
  "Dell": "/logos/logo-dell.png",
  "Positivo": "/logos/logo-positivo.png",
  "Asus": "/logos/logo-asus.png",
};

const Card = (props) => {
    const { marca, nome, preco, condicao } = props.produto;
    const [logoQuebrado, setLogoQuebrado] = useState(false);

    const classeMarca = marca
        ? "marca-" + marca.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")
        : "";

    const logoUrl = LOGOS[marca];
    const temLogoDisponivel = Boolean(logoUrl) && !logoQuebrado;

    return (
        <div className="card">
            <div className={`card-marca-placeholder ${temLogoDisponivel ? "com-logo" : classeMarca}`}>
                {temLogoDisponivel ? (
                    <img
                        src={logoUrl}
                        alt={`Logo ${marca}`}
                        className="card-marca-logo"
                        onError={() => setLogoQuebrado(true)}
                    />
                ) : (
                    marca ? marca.charAt(0).toUpperCase() : "?"
                )}
            </div>
            <h4 className="card-nome">{nome}</h4>
            <p className="card-preco">{preco}</p>
            <span className={`card-condicao ${condicao === "Novo" ? "condicao-novo" : "condicao-usado"}`}>
                {condicao}
            </span>
        </div>
    )
}

export default Card;
