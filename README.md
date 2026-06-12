# ChamaVolante - Sistema de Chamados Industriais

## Sobre o projeto

O ChamaVolante é um sistema web desenvolvido para facilitar a comunicação entre operadores de máquinas e colaboradores responsáveis pelo atendimento de ocorrências industriais.

O objetivo do projeto é reduzir o tempo gasto com deslocamentos, buscas presenciais e comunicação informal quando uma máquina necessita de suporte.

O operador registra um chamado através do sistema e o volante visualiza em tempo real as solicitações pendentes, podendo finalizar o atendimento após a resolução do problema.

---

## Problema que o projeto busca resolver

Em muitos ambientes industriais, quando uma máquina apresenta alguma necessidade operacional, o operador precisa interromper suas atividades para procurar um responsável ou realizar uma ligação.

Esse processo pode gerar:

* Perda de tempo;
* Deslocamentos desnecessários;
* Falhas de comunicação;
* Demora no atendimento.

O ChamaVolante digitaliza esse fluxo, centralizando os chamados em uma plataforma simples e objetiva.

---

## Funcionalidades

### Operador

* Abrir chamados para atendimento;
* Visualizar status da solicitação;
* Receber confirmação quando o atendimento for concluído.

### Volante

* Visualizar chamados pendentes;
* Atender solicitações;
* Finalizar operações;
* Atualizar o status dos chamados.

---

## Tecnologias utilizadas

### Frontend

* React
* TypeScript
* Vite
* React Router

### Backend

* Node.js
* Express
* TypeScript

### Banco de Dados

* PostgreSQL
* Neon

### Deploy

* Frontend: Vercel
* Backend: Render

---

## Arquitetura

Frontend → API REST → PostgreSQL

Fluxo:

1. Operador abre um chamado.
2. API registra a solicitação.
3. Banco armazena o chamado.
4. Volante visualiza os chamados abertos.
5. Volante finaliza o atendimento.
6. Operador recebe a confirmação da conclusão.

---

## Demonstração

### Operador

Página destinada à abertura de chamados.

### Volante

Página destinada ao gerenciamento e encerramento das solicitações.

---

## Próximas melhorias

* Sistema de autenticação;
* Controle de permissões por perfil;
* Cadastro de múltiplas máquinas;
* Histórico avançado de atendimentos;
* Dashboard com indicadores;
* Notificações em tempo real via WebSocket;
* Controle de setores e linhas de produção.

---

## Autor

Thiago Martins

Projeto desenvolvido com foco em aprendizado prático, resolução de problemas reais e construção de portfólio profissional na área de Desenvolvimento de Sistemas.
