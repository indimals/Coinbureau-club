/// reference type="cypress" />

it("google test", function () {
  cy.visit("https://google.com");
  cy.get(".gLFyf").type("coinbureau.com{enter}");
});


