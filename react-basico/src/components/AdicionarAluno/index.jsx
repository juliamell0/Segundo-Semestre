//src\components\AdicionarAluno\index.jsx

import { useState } from 'react'
import './styles.css'

function AdicionarAluno({onAdicionarAluno}) {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')

    const addAluno = (event) => {
        event.preventDefault()

        onAdicionarAluno({nome, idade})
        setNome('')
        setIdade('')

    }

    return (
        <>
            <form onSubmit={addAluno}>
            <h2>Adicionar novo aluno</h2>
            <input 
                type="text" 
                placeholder="Nome do aluno"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <input
                type="number"
                placeholder="Idade do aluno"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
        </>
    )
}
export default AdicionarAluno;

