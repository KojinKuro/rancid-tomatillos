import movieData from "../../src/moviesData";

describe("template spec", () => {
  beforeEach(() => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      body: movieData,
    });
  });

  const baseURL = Cypress.config("baseUrl");

  it("should be able to search different movies", () => {
    cy.visit("/");

    // can search up a specific movie
    cy.getTestId("search-bar-input")
      .type("afTer We Collided")
      .should("have.value", "afTer We Collided");
    cy.getTestId("search-result").should("have.length", 1).click();
    cy.url().should("include", `${baseURL}/613504`);

    // will clear on click off
    cy.get("body").click(0, 0);
    cy.getTestId("search-bar-input").should("have.value", "");

    // will be limited to 5 movies in alphabetical order if generic search
    cy.getTestId("search-bar-input").type("m").should("have.value", "m");
    cy.getTestId("search-result").should("have.length", 5);
    cy.getTestId("search-result").get("img").should("have.length", 5);

    cy.getTestId("search-result")
      .first()
      .should("contain", "Antebellum")
      .and("contain", "6.4/10.0")
      .and("contain", "2020");

    cy.getTestId("search-result").first().click();
    cy.url().should("include", `${baseURL}/627290`);
    cy.visit("/");

    cy.getTestId("search-bar-input").type("m");
    cy.getTestId("search-result")
      .last()
      .should("contain", "Made in Italy")
      .and("contain", "5.0/10.0")
      .and("contain", "2020");
    cy.getTestId("search-result").last().click();
    cy.url().should("include", `${baseURL}/659991`);
    cy.visit("/");

    // can look up something that doesn't exist
    cy.getTestId("search-bar-input")
      .type("foo bar")
      .should("have.value", "foo bar");
    cy.getTestId("search-result").should("have.length", 0);
    cy.getTestId("search-missing").should("have.length", 1);

    // should clear search bar after hitting escape
    cy.get("body").type("{esc}");
    cy.getTestId("search-bar-input").should("have.value", "");
  });

  it("should be to navigate with keyboard", () => {
    cy.visit("/");

    cy.getTestId("search-bar-input").type("k");
    cy.getTestId("search-result").should("have.length", 2);
    cy.get("body").type("{downArrow}{enter}");
    cy.getTestId("search-results").should("not.exist");
    cy.getTestId("search-bar-input").should("have.value", "");
    cy.url().should("include", `${baseURL}/500840`);

    cy.visit("/");

    cy.getTestId("search-bar-input").type("k");
    cy.get("body").type("{downArrow}{downArrow}{enter}");
    cy.url().should("include", `${baseURL}/579583`);

    cy.visit("/");

    cy.getTestId("search-bar-input").type("k");
    cy.get("body").type("{upArrow}{enter}");
    cy.url().should("include", `${baseURL}/579583`);

    cy.visit("/");

    cy.getTestId("search-bar-input").type("k");
    cy.get("body").type("{upArrow}{upArrow}{enter}");
    cy.url().should("include", `${baseURL}/500840`);

    cy.visit("/");

    cy.getTestId("search-bar-input").type("k");
    cy.get("body").type("{upArrow}{upArrow}{upArrow}{enter}");
    cy.url().should("include", `${baseURL}`);
    cy.get("body").click(0, 0);
    cy.getTestId("search-bar-input").type("k");
    cy.get("body").type("{downArrow}{downArrow}{downArrow}{enter}");
    cy.url().should("include", `${baseURL}`);
    cy.get("body").click(0, 0);
  });
});
