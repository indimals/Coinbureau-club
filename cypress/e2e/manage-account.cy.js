/// reference type="cypress" />

it.only("google test", function () {
  cy.visit("https://hub.coinbureau.dev/");
  cy.get(".TopNav_loginButton__hwXyf").click();
  cy.get(".SignIn_EmailDiv__x_3j0").type("indimals@yahoo.com");
  cy.get(".SignIn_PasswordDiv__6r_J_").type("Abcd@abcd2");
  cy.get(".SignIn_buttonSignInSection__By3oB").click();
  cy.get(".TopNavDashboard_menuIcon__aKLPs", { timeout: 10000 }).click();
  cy.get(".SideNavMenu_manageAccount__5sEmS").click();
  cy.get(".personal-information_cameraIcon__pkoTZ", { timeout: 10000 }).click({
    force: true,
  });
  cy.get("#profile-pic-input").click({ force: true });

  //   cy.get('[type=file]').select('\Cypress project\Cypress project\cypress\image\a.png');
  //   cy.get('.personal-information_cameraIconDiv__4hnED');

  const filepath = "a.png";
  cy.get(".profile-pic-input", { timeout: 10000 }).attachFile(filepath);
});
