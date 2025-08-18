import React, { useState } from 'react';
import './App.css';

function App() {
  //Cria uma variável e um setter (forma de adicionar dados) para o usuário
  const [usuario, setUsuario] = useState('');

  //Cria uma variável e um stter (forma de adicionar dados) para os usuários
  const [usuarios, steUsuarios] = useState(['Marta', 'João', 'Maria']);

  //Função para verificar se o usuário já existe e adiciona-lo á lista.
  const adicionarUsuario = () => {

    //Se o usuário já existir, exibe um alerta
    if (usuarios.includes(usuario)) {
      alert('Usuário já existe!');
      return;
    }
    //Se não existir , adiciona o usuário á lista e limpa o campo de entrada
    //Adiciona todos os usuários já existentes e o novo usuário
    steUsuarios([...usuarios, usuario]);
    //adiciona o usuário e torna o campo vazio
    setUsuario('');

  };
  
  return (
    <div className="App>">
      <h1>Adicionar usuários</h1>
        <input
          type="text"
          value={(usuario)}
          onChange={(e) => setUsuario(e.target.value)}
          placeholder="Digite o nome do usuário"
      />
     <button onClick={adicionarUsuario}>Adicionar</button>
     
    
      <hr />
      <h2>Lista de usuários</h2>
      <ol>
      
        {usuarios.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ol>
      </div>
      

  );
}

      

export default App;
//ol: lista ordenada
