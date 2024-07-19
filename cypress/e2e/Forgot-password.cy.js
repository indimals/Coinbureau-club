it.only("google test", function () {
    cy.visit("https://hub.coinbureau.dev/");
    cy.get(".TopNav_loginButton__hwXyf").click();
    cy.get(".SignIn_EmailDiv__x_3j0").type("indimals@yahoo.com");
    cy.get(".SignIn_PasswordDiv__6r_J_").type("Abcd@abcd2");
    cy.get('.SignIn_Forgotpassword__jdE_C').click();
    cy.get('.ForgotPassowrd_EmailDiv__uVSEK').type('indimals@yahoo.com').click();
    cy.get('.ForgotPassowrd_buttonSignInSection__ecNYu').click();
    
  });
  