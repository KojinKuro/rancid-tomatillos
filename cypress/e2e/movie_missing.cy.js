describe("template spec", () => {
  it("Going to an invalid URL will take you to the missing page", () => {
    const baseUrl = Cypress.config("baseUrl");
    // needs a movie page that we know is not correct
    cy.visit("/#/1337");
    cy.getTestId("movie-missing")
      .should("include.text", "Whoops!")
      .and(
        "include.text",
        "Looks like you're trying to access a movie that doesn't exist!"
      );

    // Should return to main page after 5 seconds
    cy.wait(6000);
    cy.url().should("include", `${baseUrl}/`);

    // do it again on another wrong URL correct
    cy.visit("/#/420");
    cy.getTestId("movie-missing")
      .should("include.text", "Whoops!")
      .and(
        "include.text",
        "Looks like you're trying to access a movie that doesn't exist!"
      );

    // Should return to main page after 5 seconds
    cy.wait(6000);
    cy.url().should("include", `${baseUrl}/#/`);
  });
});
