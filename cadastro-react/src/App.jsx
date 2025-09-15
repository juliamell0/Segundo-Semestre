import { useState } from 'react';
import './App.css';
import CadastroUsuario from './components/CadastroUsuario';
import ListarUsuario from './components/ListarUsuario';

function App() {
  const [usuarios, setUsuarios] = useState([]);

  const adicionarUsuario = (usuario) => {
    setUsuarios([...usuarios, usuario]);
  };

  return (
    <>
      <CadastroUsuario adicionarUsuario={adicionarUsuario} />
      <ListarUsuario usuarios={usuarios} />
    </>
  );
}

export default App;
