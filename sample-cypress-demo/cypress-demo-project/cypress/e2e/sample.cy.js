describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('www.google.com');
        cy.get('#APjFqb').type('hello this is cypress test demo');
    })
})
