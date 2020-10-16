import testFile from '../../fixtures/testFile.json';
import cypress  from "../../../cypress.json";
describe('test', () => {
    before( () => {
        cy.visit(cypress.baseUrl);
    });

    it('go to login page', () => {
        cy.get('[data-qa="login"]').click();
    });

    it('should login', () => {
        cy.get('#normal_login_email').type(testFile.email);
        cy.get('#normal_login_password').type(testFile.password);
        cy.get('[type="submit"]').click();
        cy.get('.ant-btn-link').click();
        cy.wait(2000)
        //cy.get('h1').should('have.text', testFile.userName);         //elem.getText()

        //2//cy.get("h1").invoke('text').then((text) => {              //elem.getText()
            //expect(text).equal(testFile.userName);
       // });

        cy.get("h1").then(function($h1) {   //elem.getText()
            expect($h1.text()).equal(testFile.userName)
            cy.log($h1.text())
        })
    });
});



