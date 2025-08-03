# 📦 CLI de Consulta de CEP

Projeto proposto pela Tutoria do Programa Desenvolve - Grupo Boticário 🌱

Criação de uma aplicação de linha de comando (CLI) desenvolvida em JavaScript que permite consultar informações de endereço a partir de um CEP brasileiro, utilizando a API pública [ViaCEP](https://viacep.com.br/).

## 🧾 Descrição

Este projeto tem como objetivo criar uma ferramenta simples para busca de endereços a partir de um CEP informado via terminal. A aplicação realiza validações básicas, faz uma requisição para a API do ViaCEP e exibe os dados de forma organizada no terminal.

## ⚙️ Funcionalidades

- ✅ Receber o CEP como argumento de linha de comando.
- ✅ Validar o formato do CEP (somente números e com 8 dígitos).
- ✅ Buscar os dados de endereço na API pública ViaCEP.
- ✅ Exibir no terminal o endereço completo: rua, bairro, cidade, estado, etc.
- ✅ Tratar erros, como CEP inválido ou inexistente.

## 🧠 Habilidades Aplicadas

- Manipulação de argumentos via terminal (`process.argv`)
- Validação de strings e expressões regulares
- Requisição de dados com `fetch` e uso de `async/await`
- Manipulação de objetos JSON
- Exibição de dados formatados no terminal

## 🚀 Como Usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/alicesfer/ConsultaCEP.git
