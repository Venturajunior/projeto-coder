import React from "react";
import './App.css'

// Componentes criados
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from "./components/basicos/CondicionalComIf"
import Repeticao from './components/basicos/Repeticao'
import Card from './components/layout/Card'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";


export default (props) => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#10 - Contador" color="#cc0000">
                <Contador passo={10}></Contador>
            </Card>
            <Card titulo="#09 - Input" color="#8e05d4 ">
                <Input></Input>
            </Card>
            <Card titulo="#08 - Comunicação Indireta" color="#598E44">
                <Super></Super>
            </Card>
            <Card titulo="#07 - Comunicação Direta" color="#4F1866">
                <Pai sobrenome="Freitas"></Pai>
            </Card>
            <Card titulo="#06 - Condicional V2" color="#BB376F">
                <CondicionalComIf numero={1123}></CondicionalComIf>
            </Card>
            <Card titulo="#05 - Condicional V1" color="#E54C72">
                <Condicional numero={11}></Condicional>
            </Card>
            <Card titulo="#04 - Repetição" color="#FA784E">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="#03 - Componente com Filhos" color="#FFDB5F">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Mariana</li>
                        <li>Maria</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#02 - Componente com Parâmetros" color="#FCB925">
                <ComParametro
                    titulo='Esse é o título'
                    subtitulo='Esse é o subtitulo'
                />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#FF9831">
                <Primeiro />
            </Card>
        </div>
    </div>
);