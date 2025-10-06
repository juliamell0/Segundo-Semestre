const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('db_funcionarios', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const Funcionario = sequelize.define('Funcionario', {
    nome: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true,
    },
    rg: {
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true,
        
    },
    matricula: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    dataNascimento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    salario: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
        
});

const Produto = sequelize.define('Produto', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lote: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    validade: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});
const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dataNascimento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    protocoloAtendimento: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
});


const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
    res.send('API de Funcionários está rodando!');
});

app.get('/funcionarios', async (req, res) => {
    const funcionarios = await Funcionario.findAll();
    res.json(funcionarios);
});

app.post('/funcionarios', async (req, res) => {
    try {
        const { nome, cpf, rg, matricula, dataNascimento, salario, telefone, email } = req.body;
        const novoUsuario = await Usuario.create({ nome, cpf, rg, matricula, dataNascimento, salario, telefone, email });
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao criar funcionário!" });
    }
});

app.get('/produtos', async (req, res) => {
    const produtos = await Produto.findAll();
    res.json(produtos);
});

app.post('/produtos', async (req, res) => {
    try {
        const { nome, lote, validade } = req.body;
        const novoProduto = await Produto.create({ nome, lote, validade });
        res.status(201).json(novoProduto);
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao criar produto!" });
    }
});

app.get('/clientes', async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes);
});

app.post('/clientes', async (req, res) => {
    try {
        const { nome, dataNascimento, protocoloAtendimento } = req.body;
        const novoCliente = await Cliente.create({ nome, dataNascimento, protocoloAtendimento });
        res.status(201).json(novoCliente);
    }
    catch (error) {
        res.status(400).json({ mensagem: "Erro ao criar cliente!" });
    }
});

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
        console.log('🚀Conectado ao banco de dados MySQL.');
    });
}).catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
});


