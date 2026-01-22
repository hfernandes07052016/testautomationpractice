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

## 📊 Relatório com Mochawesome

Este projeto pode gerar relatório HTML utilizando **Mochawesome** via `cypress-mochawesome-reporter`.

### ✅ Instalação das dependências

```bash
npm i -D mochawesome mochawesome-merge mochawesome-report-generator
npm i -D cypress-mochawesome-reporter
```

### ✅ Configuração do Cypress

#### `cypress.config.ts`

Adicione o reporter e o plugin:

```ts
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://testautomationpractice.blogspot.com",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },

  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: false,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },
});
```

#### `cypress/support/e2e.ts`

Adicione o register do reporter:

```ts
import "cypress-mochawesome-reporter/register";
```

> Se você já tiver outros imports (ex.: drag-drop), mantenha todos no mesmo arquivo.

---

### ✅ Scripts no `package.json`

Adicione estes scripts para **juntar os JSONs** e gerar **um HTML único**:

```json
{
  "scripts": {
    "cy:run": "cypress run",
    "report:mocha:merge": "mochawesome-merge cypress/reports/mochawesome/*.json > cypress/reports/mochawesome/mochawesome.json",
    "report:mocha:html": "marge cypress/reports/mochawesome/mochawesome.json -f mochawesome -o cypress/reports/mochawesome/html",
    "report:mocha": "npm run report:mocha:merge && npm run report:mocha:html"
  }
}
```

---

### ▶️ Gerando o relatório

1) Rode os testes:

```bash
npm run cy:run
```

2) Gere o relatório HTML:

```bash
npm run report:mocha
```

O arquivo final ficará em:

```
cypress/reports/mochawesome/html/mochawesome.html
```

---

### 📌 Recomendações

Adicione a pasta de relatórios no `.gitignore`:

```
cypress/reports/
```

---

## 🧪 Observações

- Como é um site de prática/demonstração, alguns dados podem mudar com o tempo e causar falhas em validações fixas (como valores de tabela).
- Para maior estabilidade, priorize seletores por **ID** e validações do comportamento final.

---

## 📌 Autor

Projeto desenvolvido para fins de avaliação técnica e demonstração de automação com Cypress.
---


