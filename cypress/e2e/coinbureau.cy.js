/// reference type="cypress" />

it("google test", function () {
  cy.visit("https://google.com");
  cy.get(".gLFyf").type("coin bureau{enter}");
  cy.get(
    '[lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb'
  ).click();
});
