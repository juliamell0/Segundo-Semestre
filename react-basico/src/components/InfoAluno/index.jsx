//src\components\InfoAluno\index.jsx
import { useState } from 'react'
import './styles.css'
import AdicionarAluno from '../AdicionarAluno';

function InfoAluno() {
    const [alunos, setAlunos] = useState([])
    
    const adicionarAluno = (novoAluno)=> {
        setAlunos([...alunos, novoAluno])
    
    };

    return (
        <>
            <AdicionarAluno onAdicionarAluno={adicionarAluno} />
            <h2>Lista de Alunos</h2>
            {alunos.length === 0 ? (
                <p>Nenhum aluno adicionado</p>
            ): (
                <ul>
                    {alunos.map((aluno, index)=> (
                        <li key={index}>
                            Nome: {aluno.nome} <br/>
                            Idade: {aluno.idade} anos
                        <hr />
                        </li>

                    ))}

                </ul>
            )}
        </>
    );
      
}   
    
    
export default InfoAluno;