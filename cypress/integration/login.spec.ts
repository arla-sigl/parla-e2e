describe('Parla login', () => {
    it('should access to the hiker center successfully when using walter', () => {
        // For the course, we use directly the address in production.
        // Normally, you want to test the RC version, so it shouldn't be 
        // the production address; but a ci one or http://localhost:8800
        cy.visit('https://parla.groupe12.arla-sigl.fr');
        cy.get('[data-cy="username"]').type('walter');
        cy.get('[data-cy="password"]').type('walter');
        cy.get('[data-cy="sign-in-btn"]').click();
        // Ensure that we see the application bar => we are successfully logged in
        cy.get('[data-cy="hiker-center"]').should('be.visible');
    })

    it('should not display hiker center if the user puts wrong credentials', () => {
        cy.visit('https://parla.groupe12.arla-sigl.fr');
        cy.loginWith('walter', 'wrong-password');
        cy.get('[data-cy="hiker-center"]').should('not.be.visible');
    })
})