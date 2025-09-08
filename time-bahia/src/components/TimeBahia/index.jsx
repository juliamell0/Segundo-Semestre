// src\components\TimeBahia\index.jsx
import React from 'react';
import { useState } from 'react';
import './style.css';

function TimeBahia() {
    const [nome, setNome] = useState('');
    const [camisa, setCamisa] = useState('');

    const [ listaJogadores, setListaJogadores ] = useState([]);

    function adicionarJogador(event) {
        event.preventDefault();
        setListaJogadores([...listaJogadores, { nome: nome, camisa: camisa }]);
        setNome('');
        setCamisa('');
    }
    return (
        <div className="time-bahia">
            <h1>Time do Bahia</h1>
            <form onSubmit={adicionarJogador}>
                <div>
                    <label>Nome do Jogador:</label>
                    <input type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Número da Camisa:</label>
                    <input
                        type="number"
                        value={camisa}
                        onChange={(e) => setCamisa(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Adicionar Jogador</button>
            </form>
            <hr />
            <h2>Lista de Jogadores</h2>
            <ul>
                {listaJogadores.map((jogador, index) => (
                    <li key={index}>{jogador.nome} - Camisa {jogador.camisa}</li>
                ))}
            </ul>
        </div>
    );
}

export default TimeBahia; 



    



