/// reference type="cypress" />

it.only("google test", function () {
  cy.visit("https://hub.coinbureau.dev/");
  cy.get(".TopNav_loginButton__hwXyf").click();
  cy.get(".SignIn_EmailDiv__x_3j0").type("indimals@yahoo.com");
  cy.get(".SignIn_PasswordDiv__6r_J_").type("Abcd@abcd2");
  cy.get(".SignIn_buttonSignInSection__By3oB").click();
  cy.get(".NeedHelp_needHelp__Zo_8i",{timeout:10000}).click();
  cy.get(
    ":nth-child(1) > .NeedHelpPopUp_EmailMainDiv__rWY6M > .NeedHelpPopUp_EmailDiv__I2xjw"
  )
    .type("indimal")
    .click();
  cy.get(
    ".NeedHelpPopUp_twoInputField__FhmsG > :nth-child(2) > .NeedHelpPopUp_EmailMainDiv__rWY6M > .NeedHelpPopUp_EmailDiv__I2xjw"
  )
    .type("indimals@yahoo.com")
    .eq(0)
    .click();
  cy.get(".NeedHelpPopUp_EmailDiv__I2xjw",{timeout:10000}).type("test").click();
  cy.get(".NeedHelpPopUp_MessageDiv__BHpL0",{timeout:10000}).type("test").click();
  cy.get(".NeedHelpPopUp_UploadDiv__fetDP",{timeout:10000}).click();
  cy.get(".NeedHelpPopUp_submitButton__yFcF3").click();
});
