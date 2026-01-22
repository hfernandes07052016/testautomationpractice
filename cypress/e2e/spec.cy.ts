import { iteratee } from "cypress/types/lodash";

describe("Automation Testing Practice - Cenários", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("1) Wikipedia: buscar termo e validar lista de resultados", () => {
    cy.get("#Wikipedia1_wikipedia-search-input").type("Automation");
    cy.get('.wikipedia-search-button').click();

    const expectedResults = [
      "Automation",
      "Automation bias",
      "Automation Master",
      "Automation of the London Underground",
      "Automation (video game)",
    ];

    cy.get("#Wikipedia1_wikipedia-search-results a")
      .should("have.length", expectedResults.length)
      .then(($links) => {
        const texts = [...$links].map((el) => el.textContent?.trim());
        expect(texts).to.deep.eq(expectedResults);
      });

  });

  it("2) Date Picker: selecionar dia 25 do próximo mês", () => {
    cy.get("#datepicker").click();

    cy.get(".ui-datepicker-next").click();

    cy.get(".ui-datepicker-calendar")
      .contains("a", /^25$/)
      .click();

    cy.get("#datepicker").invoke("val").should("match", /\d{2}\/\d{2}\/\d{4}/);
  });

  it('3) Pagination Table: localizar "Laptop" e validar Price "$10.50"', () => {
    const expectedName = "Laptop";
    const expectedPrice = "$10.50";

    cy.get<HTMLTableRowElement[]>("table#productTable tbody tr").then(($rows) => {
      const rows = Array.from($rows);
      const matching = rows.find((row) => row.innerText.includes(expectedName));

      if (matching) {
        const cells = matching.querySelectorAll("td");
        const priceText = cells[2].innerText.trim();
        expect(priceText).to.eq(expectedPrice);

      }
    });
  });

  it('4) Draggable / Droppable: plugin drag-drop', () => {
    cy.get("#draggable").scrollIntoView().drag("#droppable", { force: true });

    cy.get("#draggable p").should("have.text", "Drag me to my target");
    cy.get("#droppable p").should("have.text", "Dropped!");
  });


});
