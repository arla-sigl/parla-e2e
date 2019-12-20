# Parla E2E tests with Cypress.io

Cypress.io is a testing framework. 

It uses a chrome browser and runs automated test on any web application.

# Install Cypress

You need node installed.

```
# at the root of this repository
npm install
# this might take a minute or two
```

# Run Cypress

```bash
# will run cypress test runner
npm run cypress:open
```

This will show all our tests files (`*.specs.ts`).

Our specs should live inside `cypress/integration` folder (can be with subfolders)

# Write your tests

The login spec is implemented to verify if walter can login; using our application screens.

Cypress comes with a very good documentation; feel free to browse it for your needs!

Checkout out [Cypress.io documentation on how to write tests](https://docs.cypress.io/guides/overview/why-cypress.html#Writing-tests)

You should test a user interaction of your choice, on [Parla](https://github.com/arla-sigl/groupe-12). 

> Note: The use of Typescript with Cypress gives us auto-completion on Cypress commands

# Custom commands

Since you will need to login everytime, a custom command is implemented for you:
```ts
// Considering Parla running on localhost:8800
cy.visit('http://localhost:8800'); 
cy.loginWith('<username>', '<password>');
// you are now logged in, if username and password are correct
```

