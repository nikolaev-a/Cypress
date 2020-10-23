import testFile from '../../fixtures/testFile.json';
import cypress  from "../../../cypress.json";
describe('test', () => {
    before( () => {
        cy.visit(cypress.urlLS);
    });

    it('go to login page', () => {
        cy.get('[data-qa="login"]').click();
    });

    it('should login', () => {
        cy.get('#normal_login_email').type(testFile[0].email);
        cy.get('#normal_login_password').type(testFile[0].password);
        cy.get('[type="submit"]').click();
        cy.get('.ant-btn-link').click();
        cy.wait(2000)
        cy.get("h1").then(function($h1) {
            expect($h1.text()).equal(testFile[0].userName)
            cy.log($h1.text())
        })
    });
});

//Варианты - elem.getText()

//1//cy.get('h1').should('have.text', testFile.userName);

//2//cy.get("h1").invoke('text').then((text) => {
//expect(text).equal(testFile.userName);
// });

//3// cy.get("h1").then(function($h1) {
//             expect($h1.text()).equal(testFile[0].userName)
//             cy.log($h1.text())
//         })



