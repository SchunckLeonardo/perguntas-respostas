# Website de Perguntas e Respostas

Este é um site de perguntas e respostas construído com Node.js e Express. Permite que os usuários façam perguntas, vejam perguntas anteriores, respondam perguntas e visualizem respostas relacionadas.

## Configuração

Certifique-se de ter o Node.js instalado em seu sistema. Em seguida, siga as etapas abaixo para configurar e executar o projeto:

1. Clone este repositório em sua máquina local.
2. Navegue até o diretório do projeto e execute o seguinte comando para instalar as dependências:

   ```
   npm install
   ```

3. Certifique-se de ter um servidor de banco de dados MySQL configurado e atualize as informações de conexão em `database/database.js`.
4. Execute o seguinte comando para criar as tabelas no banco de dados:

   ```
   npx sequelize-cli db:migrate
   ```

5. Agora, você está pronto para iniciar o servidor. Execute o seguinte comando:

   ```
   npm start
   ```

6. O site estará acessível em `http://localhost:8080`.

## Funcionalidades

- Na página inicial, você pode ver as perguntas anteriores em ordem descendente.
- Você pode fazer uma nova pergunta na página "Perguntar".
- Clicando em uma pergunta, você pode ver os detalhes da pergunta e as respostas relacionadas.
- Na página de detalhes da pergunta, você pode adicionar sua resposta na seção "Responder".

Este é um projeto de exemplo e pode ser expandido com mais recursos e melhorias. Fique à vontade para personalizar e adaptar conforme suas necessidades.

**Observação:** Este projeto usa a view engine EJS. Certifique-se de ter os arquivos de modelo EJS adequados no diretório `views`.
