/// <reference types="cypress" />
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Custom command to test DOM element to contain className.
       * @example cy.containsClass('class-name')
       */
      loginWith<E extends HTMLElement = HTMLElement>(
        username: string,
        password: string
      ): Chainable<JQuery<E>>;
    }
  }
}

Cypress.Commands.add("loginWith", (username: string, password: string) => {
  cy.get('[data-cy="username"]').type(username);
  cy.get('[data-cy="password"]').type(password);
  return cy.get('[data-cy="sign-in-btn"]').click();
});

export {};
