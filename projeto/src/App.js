import React, { useState } from 'react'; 
import './App.css';

function App() {
  
  const [item, setItem] = useState('');

  
  const [itens, steItens] = useState(['Leite', 'Pão', 'Ovos']);

  
  const AdicionarItem = () => {

    
    if (itens.includes(item)) {
      alert('Item já existe!');
      return;
    }
    steItens([...itens, item]);
    
    setItem('');

  };
  
  return (
    <div className="App>">
      <h1>Adicionar item na lista de compras</h1>
        <input
          type="text"
          value={(item)}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Digite o nome do item"
      />
     <button onClick={AdicionarItem}>Adicionar</button>
     
    
      <hr />
      <h2>Lista de compras</h2>
      <ol>
      
        {itens.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ol>
      </div>
      

  );
}

      

export default App;
//ol: lista ordenada
