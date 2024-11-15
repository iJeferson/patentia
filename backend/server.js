const express = require('express');
const cors = require('cors');
const path = require('path');
const { createDatabaseIfNotExists } = require('./src/utils/database.js');
const pesquisaRoutes = require('./src/routes/pesquisaRoutes');
const downloadRoutes = require('./src/routes/downloadRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Função para criar o banco de dados se não existir
createDatabaseIfNotExists();

// Rota POST para executar o script de pesquisa
app.use('/pesquisar', pesquisaRoutes);
app.use('/download', downloadRoutes);

// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor Backend em execução');
});
