import React from "react";
import './Area.css';
import Card from "../Card/Card";

const Area = (props) => {
    return (
        <section className="area" id={props.nome}>
            <h3>{props.nome}</h3>
            <div className="area-produtos">
                {props.produtos.map((produto, index) => (
                    <Card key={index} produto={produto} />
                ))}
            </div>
        </section>
    )
}

export default Area;
