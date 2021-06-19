## Descrição

API Rest HR Management - mesha
</br>
</br>

## Tecnologias usadas:

<img align="left" alt="NestJs" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
<img align="left" alt="NestJs" width="26px" src="https://avatars1.githubusercontent.com/u/28507035?s=200&v=4" />
<img align="left" alt="Mysql" width="26px" src="https://avatars.githubusercontent.com/u/177543?s=200&v=4" />
</br>
</br>

- User model
  - usermane *
  - password *
  - role - default(employee)

- Knowledge model
  - title *
  - user_id  *

- Person model
  - name *
  - email *
  - cpf *
  - phone_number
  - knowledges list *
  - user_id

## Instalação


```bash
$ yarn - Isso irá instalar todas as dependencias
```
</br>
</br>

## Para rodar a API


```bash
# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```
</br>
</br>

## Postgresql Database Connection

- host: 'localhost',
- port: 5432,
- username: 'root',
- password: 'admin',
- database: 'mesha',
</br>
</br>

## Endpoints
```bash
# url_base
$ http://localhost:3000/api
```

- ### User's Endpoints
  - Signup(POST): url_base/auth/signup
  - Signin(POST): url_base/auth/signin
  - update(PATCH): url_base/auth/update - Endpoint para alterar role(apenas para teste)
  
- ### Knowledge's Endpoints
  - persist(POST): url_base/knowledge
  - getAll(GET): url_base/knowledge
  - getById(GET): url_base/knowledge/$id
- ### Person's Endpoints
  - persist(POST): url_base/person
  - getAll(GET): url_base/person
  - getById(GET): url_base/person/$id
  - update(PATCH): url_base/person/$id/update
</br>
</br>

## Stay in touch

- E-mail - dev.felpz@gmail.com
- Linkedin - [My Linkedin](https://www.linkedin.com/in/wanderson-felipe-freire-pereira-618654175/)

