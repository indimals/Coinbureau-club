/// reference type="cypress" />


it.only("google test", function () {
  cy.visit("https://hub.coinbureau.dev/sign-up/");

    // // first Name
  cy.get(
    ".SignUp_parerralFields__07glu > :nth-child(1) > .SignUp_EmailMainDiv__gbOOM > .SignUp_EmailDiv__qTFzl"
  ).click({ force: true });
  cy.get(".SignUp_EmailClickInputField__DdlLH").type("Test");
  cy.get(".SignUp_EmailClickInputField__DdlLH").eq(0).type("Textdemo"); 

    // // last Name
  cy.get(
    ".SignUp_parerralFields__07glu > :nth-child(2) > .SignUp_EmailMainDiv__gbOOM > .SignUp_EmailDiv__qTFzl"
  ).click({ force: true });
  cy.get(".SignUp_EmailClickInputField__DdlLH").eq(1).type("test demo");

    // // email
  cy.get(
    ":nth-child(3) > :nth-child(2) > .SignUp_EmailMainDiv__gbOOM > .SignUp_EmailDiv__qTFzl"
  ).click({ force: true });
  cy.get(".SignUp_EmailClickInputField__DdlLH")
    .eq(2)
    .type("gatapa7353@klanze.com");

  // Country
  // cy.get(
  //   ".SignUp_CountryOuterDiv__WFwq3 > :nth-child(1) > .SignUp_EmailMainDiv__gbOOM > .SignUp_EmailDiv__qTFzl"
  // ).click({force: true})
  // .select("Austria")
  // .should('have.value','Austria');
  // cy.get("#cntry").type("Austria").select('Austria').should('have.value','Austria');
  
  // cy.select('input type="text" id="cntry" placeholder="Search" tabindex="0"');
  // cy.get('input[type="text"][id="cntry"][placeholder="Search"][tabindex="0"]').type('Austria');
  // cy.get(':nth-child(3) > .SignUp_countryOption__379jK').select("austria");
  // cy.get('ul li').eq(0).click();
  // cy.get(".SignUp_countryOption__379jK").click();
  // cy.get('.SignUp_countryOption__379jK[tabindex="2"]').click();

  // cy.get('SignUp_Email__2hJKH',{timeout:100000}).find('li class').contains('Austria').click();

  
  // password
  cy.get(
    ":nth-child(4) > .SignUp_PasswordMainDiv__yCuZh > .SignUp_PasswordDiv__JBW8O"
  ).click({ force: true });
  cy.get(".SignUp_PasswordClickInputField__OnzyG").eq(0).type("Abcd@abcd1");

  // Confirm password
  cy.get(
    ":nth-child(5) > .SignUp_PasswordMainDiv__yCuZh > .SignUp_PasswordDiv__JBW8O"
  ).click({ force: true });
  cy.get(".SignUp_PasswordClickInputField__OnzyG").eq(1).type("Abcd@abcd1");

  // check box
  cy.get(".SignUp_checkbox__oQGQ_").click({ force: true });

  // create account button
  cy.get(".SignUp_buttonSignInSection__T0iOR").click({ force: true });
});
