describe("Homepage", () => {
  beforeEach(() => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      method: "GET",
      fixture: "movies.json",
    }).as("getMovies");

    cy.intercept(
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270",
      {
        method: "GET",
        fixture: "movie-436270.json",
      }
    ).as("getMovie436270");

    cy.intercept(
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495",
      {
        method: "GET",
        fixture: "movie-724495.json",
      }
    ).as("getMovie724495");

    cy.intercept(
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/634649",
      {
        method: "GET",
        fixture: "movie-634649.json",
      }
    ).as("getMovie634649");

    cy.intercept(
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/414906",
      {
        method: "GET",
        fixture: "movie-414906.json",
      }
    ).as("getMovie414906");

    cy.intercept(
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/438148",
      {
        method: "GET",
        fixture: "movie-438148.json",
      }
    ).as("getMovie438148");

    cy.visit("/");
  });

  it("Should display the header with the search bar", () => {
    cy.get("header").should("be.visible");
    cy.get("input[type='text']").should(
      "have.attr",
      "placeholder",
      "Search movies"
    );
  });

  it("Should display the hero section with featured movies", () => {
    cy.wait("@getMovies");
    cy.wait("@getMovie436270");
    cy.wait("@getMovie724495");
    cy.wait("@getMovie634649");
    cy.wait("@getMovie414906");
    cy.wait("@getMovie438148");

    cy.get(".hero").should("exist");
    cy.get(".hero-content").should("be.visible");

    cy.get(".hero")
      .first()
      .within(() => {
        cy.get(".hero-title").contains("Black Adam");
        cy.get(".hero-rating").contains("4.0");
        cy.get(".hero-details").contains("2022");
        cy.get(".hero-details").contains("125 min");
        cy.get(".hero-details").contains("Action");
        cy.get(".hero-overview").contains(
          "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world."
        );
      });
  });

  it("Should display a grid of movies in the movies container", () => {
    cy.wait("@getMovies");
    cy.get(".movies-container").should("exist");
    cy.get(".movies-container .movie").should("have.length", 5);

    cy.get(".movies-container .movie")
      .first()
      .within(() => {
        cy.get(".movie--title").contains("Black Adam");
        cy.get(".movie--poster img")
          .should("have.attr", "src")
          .should("include", "pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg");
      });

    cy.get(".movies-container .movie")
      .last()
      .within(() => {
        cy.get(".movie--title").contains("Minions: The Rise of Gru");
        cy.get(".movie--poster img")
          .should("have.attr", "src")
          .should("include", "rwgmDkIEv8VjAsWx25ottJrFvpO.jpg");
      });
  });

  it("Should navigate to the appropriate movie page when a movie poster is clicked", () => {
    cy.wait("@getMovie436270");

    // ensure the first movie poster is visible and enabled before clicking. $el is a varaible indicating that this is a wrapped element
    cy.get(".movies-container .movie")
      .first()
      .should("be.visible")
      .then(($el) => {
        cy.wrap($el).click();
      });
    cy.url().should("include", "/436270");
    cy.wait("@getMovie436270");

    cy.get('[data-test-id="movie-title"]')
      .should("be.visible")
      .contains("Black Adam");
    cy.wait(500);

    cy.get('[data-test-id="return-home-button"]')
      .should("be.visible")
      .click({ force: true });

    cy.url().should("eq", "http://localhost:3000/rancid-tomatillos/#/");
  });
});
