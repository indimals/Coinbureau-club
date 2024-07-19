/// reference type="cypress" />
it.only("google test", function () {
    cy.visit("https://mail.google.com/mail/u/2/#inbox");
    cy.get('#identifierId').type('imindimal').click(); 

});