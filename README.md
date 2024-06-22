# abp-topicos-especiais-satc
Aplicação Baseada em Problema para a disciplina de Tópicos Especiais do curso de Engenharia da Computação

# Sistema de Controle de Condomínios

## Propósito do Sistema

Desenvolver um sistema de controle de condomínios que permita o cadastro de residências, moradores e taxas de condomínio, além de realizar as transações necessárias.

## Usuários

- **Admin**: Responsável pelo cadastro e manutenção das informações do condomínio, como residências, moradores e taxas.
- **Moradores**: Podem visualizar suas informações pessoais e financeiras, como taxas pagas e inadimplências.

## Requisitos Funcionais

### Cadastro de Residências
- O sistema deve permitir o cadastro de novas residências.
- O sistema deve permitir a atualização e remoção de residências.

### Cadastro de Moradores
- O sistema deve permitir o cadastro de novos moradores.
- O sistema deve permitir a atualização e remoção de moradores.

### Cadastro de Taxas de Condomínio
- O sistema deve permitir o cadastro de taxas de condomínio.
- O sistema deve permitir a atualização e remoção de taxas.

### Transação de Troca de Morador
- O sistema deve validar as cobranças antes de trocar um morador.
- Se as cobranças estiverem pagas, o sistema deve permitir a alteração do nome do morador no cadastro de residência.

### Operação de Cálculo de Inadimplência
- O sistema deve verificar quais moradores possuem cobranças não quitadas e marcá-los como inadimplentes.

## Descritivo Técnico

### Microsserviços Existentes

#### Microsserviço de Residências
- **Função**: Gerenciar o cadastro de residências, permitindo operações de criação, leitura, atualização e exclusão (CRUD).
- **Tecnologia**: .NET 8

#### Microsserviço de Moradores
- **Função**: Gerenciar o cadastro de moradores, permitindo operações de CRUD.
- **Tecnologia**: .NET 8

#### Microsserviço de Taxas de Condomínio
- **Função**: Gerenciar o cadastro de taxas de condomínio, permitindo operações de CRUD.
- **Tecnologia**: .NET 8

### Transação e Comunicação entre Microsserviços
- **Troca de Morador**: Implementada no Microsserviço de Taxas de Condomínio.
- **Cálculo de Inadimplência**: Implementada no Microsserviço de Taxas de Condomínio.

## Tecnologias Utilizadas
- Node.js para os Microsserviços de Residências, Moradores e Taxas de Condomínio.

---

Este projeto visa fornecer um sistema eficiente e modular para a gestão de condomínios, permitindo uma administração eficaz e transparente das informações e transações relacionadas aos moradores e às taxas de condomínio.
