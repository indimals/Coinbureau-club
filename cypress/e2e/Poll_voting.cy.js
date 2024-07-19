/// reference type="cypress" />

it.only("google test", function () {
    cy.visit("https://hub.coinbureau.dev/");
    cy.get(".TopNav_loginButton__hwXyf").click();
    cy.get(".SignIn_EmailDiv__x_3j0").type("indimals@yahoo.com");
    cy.get(".SignIn_PasswordDiv__6r_J_").type("Abcd@abcd2");
    cy.get(".SignIn_buttonSignInSection__By3oB").click();
    cy.get(".TopNavDashboard_menuIcon__aKLPs", { timeout: 10000 }).click();
    cy.get('[href="/alt-coin-review-polls/"] > .SideNavMenu_navItem__wkMTN').click();
    cy.get('coin-review-poll_singlePollItemSelected__Qebb8',{timeout:100000}).click();
    cy.get('.coin-review-poll_undo__gHQu2').click();
    
    
    });