import cypress  from "../../../cypress.json";

describe('DEMO QA TESTS', () => {
    before('open demo qa', () => {
        cy.visit(cypress.urlDQ);
    })

    it('to go elements', () => {
        cy.get('.card.mt-4.top-card:nth-child(1)').click();
    })
})