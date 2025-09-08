// src\components\InfoCliente\index.jsx
import './style.css'
import { useState } from 'react';
import logo from '../../assets/images/logo.png';


function InfoCliente() {
    const [nome, steNome] = useState('');
    const [email, setEmail] = useState('');

    const [ listaClientes, setListaClientes ] = useState ([]);

    function adicionarCliente(event) {
        event.preventDefault();
        setListaClientes([...listaClientes, { nome: nome, email: email }]);
        steNome('');
        setEmail('');
    }
    return (
        <div className="info-cliente">
            <img src={logo} alt="Logo cadastro" className="icone-cliente" />
            <h2>Cadastro de Clientes</h2>
            <form onSubmit={adicionarCliente}> 
                {/* //permite que o usuario entre em contatp com o sistema (formulario) */}
                <div>
                    <label>Nome:</label>
                    <input type="text" 
                    value={nome} 
                    onChange={(e) => 
                    steNome(e.target.value)} 
                    required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" 
                    value={email} 
                    onChange={(e) => 
                    setEmail(e.target.value)} 
                    required />
                </div>
                <button type="submit">Adicionar Cliente</button>
            </form>
            <hr />
            <h3>Lista de Clientes</h3>
            <ul>
                {listaClientes.map((cliente, index) => (
                    <li key={index}>{cliente.nome} - {cliente.email}</li>
                ))}
            </ul>

        </div>
    
        
    );
}


export default InfoCliente;