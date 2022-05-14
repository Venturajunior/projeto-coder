import React from "react";
import Filho from "./Filho";

export default props =>
    <div>
        <Filho {...props}>João</Filho>
        <Filho sobrenome={props.sobrenome}>Joãozinho</Filho>
        <Filho sobrenome="Silva">Jão</Filho>
    </div>