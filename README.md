<h1 align="center">
Marvel React App
</h1>

<h2 align="center">Startec Challenge</h2>

<p align="center">Data provided by <a href="https://developer.marvel.com/" alt="Marvel's API">Marvel</a>. © 2014 Marvel</p>
<p align="center">Deployed <a href="#">here</a>.</p>

<p align="center">
  <a href="https://github.com/andrekardec/startec-marvel/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/andrekardec/startec-marvel?color=%237159c1&logoColor=%237159c1&style=flat" alt="Contributors">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/github/license/andrekardec/startec-marvel?color=%237159c1&logo=mit&license=mit" alt="License">
  </a>
</p>

<hr>

## Participants

| [<img src="https://avatars.githubusercontent.com/u/72898109?v=4" width="75px;"/>](https://github.com/andrekardec) |
| :---------------------------------------------------------------------------------------------------------------: |

| [Andre Kardec](https://github.com/andrekardec)

## Techs

- [x] ReactJS
- [x] React Router Dom
- [x] Context API
- [x] Context Selector API
- [x] Styled Components
- [x] TypeScript
- [x] Lint
- [x] Jest
- [x] Hooks
- [x] Handmade Hooks
- [x] Webpack
- [x] Babel

## GIT WORKFLOW

- [x] GitFlow
## Main Design Patterns

- [x] Dependency Inversion Principle
- [x] Hooks Pattern
- [x] Adapters Pattern
- [x] Data Transfer Objects Pattern (a.k.a DTOs)
- [x] Data Provider Pattern
- [x] Context 

## Main Requirements Analysis Technics
- [x] UseCase technique 

## Elicitação da arquitetura (Resumo)

A arquitetura tem no domínio os objetos de transferência de dados que se conectam com seus respectivos casos de uso, especificando o comportamento geral do sistema a nível de funcionalidade. Não utilizei o conceito de entidades, porque acreditei ser mais apropriado trabalhar com o padrão DTO já que a API da Marvel é extramente inconsciente quanto à estrutura de dados. Do domínio, a aplicação passa pelos adaptadores, uma camada que funciona como uma ponte entre a lógica de processamento de dados e a funcionalidade da aplicação para a camada de interface gráfica, neste contexto, o React, em si (web).

Nos adaptadores, implementei um provedor para o protocolo HTTP, utilizando o Axios. Para a inversão de dependência, trabalhei com conteinerização através do Tsyringe, aproveitando o benefício do padrão Singleton. Uma vez processados os casos de uso, o singleton de cada um deles é utilizado para prover um contexto de dados específico, mediante demanda, para o front-end que é, então, "içado", através dos hooks da camada de apresentação para o interior do front.

## Usage
1. Run `npm install` or `yarn install`.<br />
2. Run `yarn start` and access `http://localhost:3000`.<br />
