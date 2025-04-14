# Gerenciamento de Zoológico

Entrega final do teste técnico para o **CIEE** — sistema de gerenciamento de animais e cuidados em um zoológico.

## Sobre o Projeto

Este projeto foi desenvolvido como parte do desafio técnico proposto para a vaga no CIEE. A proposta consistia em criar uma aplicação completa com **frontend**, **backend** e integração com **banco de dados**, permitindo a manipulação de dados relacionados a animais e seus respectivos cuidados.

Apesar de não ter conseguido entregar a aplicação 100% funcional, estou satisfeito com os avanços e o aprendizado adquirido. Foi um projeto desafiador, onde consegui aplicar diversos conhecimentos e aprender ainda mais no processo.

## Funcionalidades Implementadas

### Frontend
- Cadastro, listagem, edição e exclusão de **animais**
- Estrutura de páginas para cadastro e listagem de **cuidados** (em desenvolvimento)
- Interface desenvolvida com **React + TypeScript** e estilizada com **TailwindCSS**
- Utilização de **API simulada** para testar o fluxo de dados no início do projeto

### Backend
- Configuração de um servidor **Express** com TypeScript
- Conexão com **MySQL** usando script de configuração via `database.ts`
- Endpoint `GET` funcional, retornando dados do banco de dados
- Estrutura criada para `POST`, porém com falhas de integração na inserção no banco

## Arquitetura do Projeto

ZOO-MANAGEMENT-SYSTEM/
├── backend/
│   └── src/
│       ├── controllers/
│       ├── routes/
│       ├── App.ts
│       ├── database.ts
│       └── server.ts
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── types/
│       ├── index.css
│       └── main.tsx
├── .env
└── outros arquivos de configuração


## Banco de Dados

Abaixo está a estrutura da tabela `animais` utilizada no banco de dados MySQL, bem como alguns dados de teste inseridos manualmente para desenvolvimento:

```sql
CREATE TABLE `zoo-management-system`.`animais` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `descricao` TEXT NOT NULL,
  `data_nascimento` DATE NOT NULL,
  `especie` VARCHAR(100) NOT NULL,
  `habitat` VARCHAR(100) NOT NULL,
  `pais_origem` VARCHAR(100) NOT NULL,
  `criado_em` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

-- Inserção de dados para teste

INSERT INTO `zoo-management-system`.`animais`
(nome, descricao, data_nascimento, especie, habitat, pais_origem)
VALUES
('Leão', 'Leão grande', '2003-10-30', 'Mamífero', 'Savanna', 'África do Sul'),
('Leoa', 'Leoa gigante', '1999-10-30', 'Mamífero', 'Savanna', 'Egito');


 
