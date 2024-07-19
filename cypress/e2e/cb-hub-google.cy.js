/// reference type="cypress" />

it("google test", function () {
    cy.visit("https://hub.coinbureau.dev/");
    cy.get('.TopNav_loginButton__hwXyf').click();
    cy.get('.SignIn_buttonGoogleSection__AJfLF').click();

});