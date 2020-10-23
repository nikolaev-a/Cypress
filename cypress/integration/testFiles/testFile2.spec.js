import cypress  from "../../../cypress.json";
import testFile from "../../fixtures/testFile.json";

describe('DEMO QA TESTS', () => {
    before('open demo qa', () => {
        cy.visit(cypress.urlDQ);
    })

    it('to go elements', () => {
        cy.get('.card.mt-4.top-card:nth-child(1)').click()
        .url().should('eq', testFile[1].urlPageElements);
    })

    it('should text on the page "Please select an item from left to start practice."', () => {
        cy.get('.col-md-6').should('have.text',testFile[1].elementsText);
    })


})