# SENAIBOT

Este projeto tem como objetivo automatizar o processo de consulta de patentes no INPI (Instituto Nacional da Propriedade Industrial) e exibir os resultados por meio de uma interface web. O sistema utiliza Python para realizar a raspagem dos dados, armazenando-os em um banco de dados, e o frontend é desenvolvido em React para exibição dos dados.

## 📸 Imagem do projeto
![screencapture-localhost-5173-2024-12-07-01_16_38](https://github.com/user-attachments/assets/9afb1748-adc1-4166-850b-97ab08cacaae)

## 📽️ Vídeo do Projeto

Confira o vídeo do projeto Senabot, desenvolvido como parte do meu TCC no curso de Desenvolvimento de Sistemas no SENAI CIMATEC:

[![Assista ao vídeo no YouTube](https://img.youtube.com/vi/GSzvVvewhI4/0.jpg)](https://youtu.be/GSzvVvewhI4)

## 💻	 Funcionalidades
- **Raspagem de Dados de Patentes**: Realiza a raspagem de dados de patentes diretamente do site do **INPI** (Instituto Nacional de Propriedade Industrial).
- **Armazenamento em Banco de Dados**: Armazena as informações extraídas das patentes em um banco de dados (MySQL).
- **Exibição na Interface Web**: Exibe os dados de patentes na interface web, permitindo ao usuário **consultar os registros de patentes** de forma interativa e dinâmica.
- **Download de Excel**: Permite ao usuário baixar os dados em formato de planilha Excel para análise offline.
- **Dashboard**:  Exibe informações sobre anos das patentes, total de patentes, top IPCs e permite filtrar as últimas 5 patentes adicionadas.
- **Chat de Suporte**: Permite ao usuário tirar dúvidas ou reportar erros diretamente à equipe de suporte por meio de um chat integrado na interface.

## 🛠️ Tecnologias Utilizadas
- **Backend**:
  - **Python**: Para realizar a raspagem de dados do INPI.
  - **Bibliotecas para Raspagem de Dados**:
    - **Selenium**: Para interagir com páginas dinâmicas (se necessário) e realizar a raspagem de dados de forma mais robusta.
    - **Requests**: Para realizar requisições HTTP ao site do INPI.
  - **Banco de Dados**:
    - **MySQL**: Para armazenar as informações extraídas das patentes.
  - **Node.js**: Usado para expor a API que comunica o backend com o frontend, permitindo que os dados sejam acessados pela interface web.
    
- **Frontend**:
  - **React.js**: Interface web interativa.
  - **Tailwind CSS**: Estilização responsiva e moderna.
  - **Axios**: equisições HTTP para o backend.
  - **Material-UI (MUI)**: Componentes de UI prontos para facilitar o desenvolvimento.
  - Chart.js: Criação de gráficos interativos e visualização de dados de maneira atraente.
  - Firebase: Integração para autenticação, proteção de rotas e gerenciamento de usuários.

## 📋 Pré-Requisitos
- Node.js
- Python
- Banco de dados (MySQL)

## 📁 Estrutura de Pastas

A estrutura de pastas do projeto foi organizada de forma a manter o código modular e fácil de gerenciar. Abaixo está a descrição de cada pasta e sua função:

### 🗂️ `frontend/` 
Esta pasta contém todo o código do frontend da aplicação, incluindo componentes, páginas e arquivos relacionados ao lado do cliente.

- **`src/`**: Contém os arquivos-fonte do frontend.
  - **`router/`**: Gerenciamento de rotas, incluindo a proteção de rotas para áreas autenticadas.
  - **`context`/**: Gerenciamento de estado global e compartilhamento de dados utilizando o Context API.
  - **`services/`**: Configurações e integração do Firebase, como autenticação e conexão com o banco de dados.
  - **`components/`**: Componentes reutilizáveis em toda a aplicação.
  - **`pages/`**: Páginas da aplicação. Cada arquivo dentro dessa pasta corresponde a uma página na aplicação.
  - **`App.tsx`**: Componente principal da aplicação.
  - **`index.css`**: Arquivo principal de estilo, responsável por importar as configurações do Tailwind CSS para a aplicação.

### 🗂️ `backend/` 
Esta pasta contém toda a lógica de back-end, incluindo servidores, rotas e acesso ao banco de dados.
- **`server.js`**: Arquivo principal do servidor. Localizado fora da pasta `src`. Arquivo principal que inicializa o servidor Express.
  - **`src/`**: Contém os arquivos-fonte do backend.
    - **`controllers/`**: Funções que lidam com as requisições e lógicas de resposta.
    - **`models/`**: Modelos de dados, geralmente representando tabelas do banco de dados.
    - **`routes/`**: Arquivos que definem as rotas da API.
    - **`utils/`**: Funções utilitárias para o backend.
    - **`config`**: Pasta com o arquivo para inicializar a conexão com o banco de dados.


## 🚀  Rodando localmente

### 1. Clonar o Repositório

Primeiro, clone o repositório do projeto para sua máquina local:

```bash
git clone git@github.com:iJeferson/patentia.git
```

### 2. Instalar as Dependências

O projeto está dividido em duas partes: o backend e o frontend. Siga as etapas abaixo para instalar as dependências e rodar o projeto.

Na raiz do seu projeto, onde estão as pastas frontend e backend, execute o comando abaixo para instalar as dependências principais:

```bash
npm install
```

Navegue até a pasta do frontend e instale as dependências do React:

```bash
npm install
```
Navegue até a pasta src/utils do backend e instale as dependências do Python: 

```bash
pip install -r requirements.txt
```

###  3. Configurar o Banco de Dados

- 3.1 Navegue até o caminho backend/src/config/config.json e edite o arquivo para ajustar as credenciais do ambiente de desenvolvimento.

       {
            "development": {

                "username": "seu_usuario",

                "password": "sua_senha",

                "database": "seu_banco",

                "host": "Endereço do servidor",

                "dialect": "mysql"
            }
        }

- 3.2 Configurar um arquivo .env na raiz da pasta backend para definir as variáveis de ambiente necessárias. Este arquivo não é incluído no repositório por motivos de segurança.

        EXPRESS_PORT=3000

        DB_HOST=localhost

        DB_USER=root

        DB_PASSWORD=senha123

        DB_DATABASE=meu_banco

 - 3.3 Importar a tabela wipo_dados para o banco de dados MySQL. A tabela wipo_dados contém dados essenciais para o sistema e precisa ser carregada corretamente no banco de dados para garantir o funcionamento adequado da aplicação. O arquivo da tabela wipo_dados se encontra zipado na pasta **backend/src/utils** do projeto e deve ser descompactado antes de ser importado para o MySQL.

- 3.4 Antes de rodar as migrations, verifique as configurações do banco de dados no arquivo de configuração do backend. Certifique-se de que as credenciais do banco de dados (nome de usuário, senha, nome do banco) estão corretas para o ambiente local.
Agora, execute a migration para criar as tabelas necessárias no banco de dados. Navegue até a pasta src dentro do diretório backend e execute o comando da migration:
```bash
npx sequelize-cli db:migrate
```

###  4. Rodar o Projeto

Agora que as dependências estão instaladas e o banco de dados está configurado, basta rodar o projeto. Na raiz do projeto, execute o comando:

```bash
npm run dev
```
### 5. Acessar a Aplicação

Agora você pode acessar a aplicação localmente no seu navegador:

- Frontend (React): Acesse http://localhost:5173 para visualizar a interface web.

### 6. Testar Funcionalidades
Após iniciar o frontend e backend, você pode testar as funcionalidades do sistema, como:

- Raspagem de dados: Verifique se a raspagem de patentes do INPI está funcionando corretamente.

- Consulta de patentes: Acesse os dados extraídos via a interface web no frontend.

- Download de Excel: Teste o download dos dados no formato de planilha.

## 🚀 Exemplo de Uso

1. Após rodar o projeto, acesse a interface web no endereço [http://localhost:5173](http://localhost:5173).
2. Insira os termos de pesquisa para consultar as patentes.
3. O sistema irá exibir os dados extraídos do INPI, permitindo visualizar e interagir com as informações.
4. Para fazer o download das patentes em formato Excel, clique no botão "Baixar Excel".
5. Para visualizar o dashboard das patentes, clique no botão "Dashboard".
6. Utilize o chat disponível na interface para tirar dúvidas ou reportar erros diretamente à equipe de suporte.

## 📜 Histórico de Alterações

### [1.0.0] - 09/12/2024
- Implementação da raspagem de dados de patentes.
- Conexão com banco de dados MySQL.
- Exibição de patentes na interface web.
- Funcionalidade de download de Excel.
- Dashboard Interativo: Exibe informações sobre a patente pesquisada.
- Adicionado chat para tirar dúvidas e reportar erros diretamente à equipe de suporte.


## 🤝 Autores

- [Jeferson Oliveira](https://github.com/iJeferson)
- [Hercules Oliveira](https://github.com/GodHercules)
- [Ielber Pellegrini](https://github.com/ielberPellegrini)
- [Mateus Fernandes](https://github.com/mateusfernandesvn)

## 📝 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
