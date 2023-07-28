##########################################################################

Inicialização do projeto:

-cd front [para entrar na pasta no projeto]
-npm intall ou yarn [para instalar as dependencias do projeto].
-yarn dev [para iniciar o servidor].

Requisitos:

- node
- yarn/npm

##############################################################################

Rotas da aplicação

### POST - /customers

- Rota para criação de usuário com os seguintes dados:
    - full_name
    - email
    - phone
    - password

### GET - /customer

- Rota de listagem de todos os usuarios cadastrados na aplicação com o seguinte retorno:
    {
        - id
		- full_name
		- email
		- phone
		- registration_Date
    }


### PATCH - /customer

- Rota para atualizar os dados do perfil do usuário logado;
- Com o seguinte retono:
    {
        - id
		- full_name
		- email
		- phone
		- registration_Date
    }

### DELETE - /customer

- Rota para deletar a conta do usuário logado;
- Não possui corpo nem retorno;


### POST - /login

- Rota de login recebendo **email** e **password**;
- O login valida se o usuário existe e valida se a senha está correta;


### POST - /contacts

- Rota para criação de contatos com os seguintes dados:

    - full_name
    - email
    - phone
    - password
    - customer


### GET - /contacts

- Rota para listar todas os contacts com o seguinte retorno:

    {
        - id
		- full_name
		- email
		- phone
		- registration_Date
    }


### GET - /mycontacts

- Rota para listar todos os meus contatos com o seguinte retorno:

    {
        - id
		- full_name
		- email
		- phone
		- registration_Date
    }


### PATCH - /contacts/id

- Rota para atualizar meu contato com o seguinte retorno:

    {
        - id
		- full_name
		- email
		- phone
		- registration_Date
    }


### DELETE - /customer

- Rota para deletar meu contato;
- Não recebe corpo e não tem retorno;


######################################################################


