/// <reference types="cypress" />

declare namespace Cypress {
   interface Chainable {
      drag(subject: string, options?: any): Chainable<Element>;
   }
}
