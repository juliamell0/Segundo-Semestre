import { useState } from 'react';
import './styles.css';

function CadastroUsuario({ adicionarUsuario }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoUsuario = { nome, email, telefone };
    adicionarUsuario(novoUsuario);

    setNome('');
    setEmail('');
    setTelefone('');
  };

  return (
    <div className="cadastro-usuario">
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Telefone:</label>
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroUsuario;
