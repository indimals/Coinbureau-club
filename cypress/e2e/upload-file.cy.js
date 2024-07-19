describe("upload file", function () {
  it("upload file", function () {
    const yourFixturepath = "a.png";

    cy.get("information_profileImageDiv__iEame", {
      timeout: 100000,
    }).attachFile(yourFixturepath);
    cy.get("#file-submit").click();
    cy.get("#uploaded-file").contains("a.png");
  });
});
