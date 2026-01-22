# Cypress E2E - TestAutomationPractice (TypeScript)

Projeto de automação E2E utilizando **Cypress + TypeScript** para testar o site:  
https://testautomationpractice.blogspot.com/

---

## ✅ Tecnologias utilizadas

- **Cypress**
- **TypeScript**
- **Node.js**
- **NPM**

---

## 📌 Pré-requisitos

Antes de começar, instale:

- **Node.js (LTS)** (recomendado 18+)
- **NPM** (já vem junto com o Node)

Verifique as versões instaladas:

```bash
node -v
npm -v
```

---

## 📥 Instalação do projeto

1. Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

2. Acesse a pasta do projeto:

```bash
cd <NOME_DO_PROJETO>
```

3. Instale as dependências:

```bash
npm install
```

---

## ▶️ Como executar os testes

### ✅ Abrir o Cypress no modo interativo

```bash
npx cypress open
```

Ou, caso exista no `package.json`:

```bash
npm run cy:open
```

---

### ✅ Rodar os testes em modo headless (terminal)

```bash
npx cypress run
```

Ou:

```bash
npm run cy:run
```

---

## 📂 Estrutura do projeto

```
cypress/
  e2e/
    spec.cy.ts
  support/
    e2e.ts
cypress.config.ts
tsconfig.json
package.json
README.md
```

---

## ✅ Cenários automatizados

### 1) Wikipedia
- Digitar um termo no campo **Wikipedia** (ex: `Automation`)
- Acionar a busca
- Validar se a lista de resultados é exibida

---

### 2) Date Picker
- Selecionar uma data específica no campo **Date Picker**  
  Exemplo: dia **25 do próximo mês**

---

### 3) Pagination Table
- Localizar o produto **Laptop**
- Capturar o valor da coluna **Price**
- Validar se o preço é **"$10.50"**

⚠️ **Status atual:** este cenário está **falhando**, pois o valor exibido na tabela do site está **diferente de "$10.50"** no momento da execução.

✅ O teste está correto, porém a massa de dados do site está diferente do valor esperado.  
Para corrigir, atualize o valor esperado no teste com o preço atual exibido na página.

---

### 4) Draggable / Droppable
- Arrastar o elemento **Draggable** para dentro da área **Droppable**
- Validar se o texto foi alterado para **"Dropped!"**

---

## 🧪 Observações

- Como é um site de prática/demonstração, alguns dados podem mudar com o tempo e causar falhas em validações fixas (como valores de tabela).
- Para maior estabilidade, priorize seletores por **ID** e validações do comportamento final.

---

## 📌 Autor

Projeto desenvolvido para fins de avaliação técnica e demonstração de automação com Cypress.
