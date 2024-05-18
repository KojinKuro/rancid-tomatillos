import movieData from "../../src/moviesData";

describe("template spec", () => {
  beforeEach(() => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      method: "GET",
      body: movieData,
    });
  });

  it("Should be able to see details of movie id 694919", () => {
    cy.intercept(
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919",
      {
        method: "GET",
        body: {
          movie: {
            id: 694919,
            title: "Money Plane",
            poster_path:
              "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
            backdrop_path:
              "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
            release_date: "2020-09-29",
            overview:
              "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
            average_rating: 6.666666666666667,
            genres: ["Action", "Crime", "Thriller"],
            budget: 568443,
            revenue: 618,
            runtime: 82,
            tagline: "The heist of the century.",
          },
        },
      }
    );

    cy.intercept(
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos",
      {
        method: "GET",
        body: {
          videos: [
            {
              id: 1,
              movie_id: 694919,
              key: "aETz_dRDEys",
              site: "YouTube",
              type: "Trailer",
            },
          ],
        },
      }
    );

    // navigate to the first mock movie
    cy.visit("/#/694919");

    // should have a header and no footer
    cy.get("header");
    cy.get("footer").should("not.exist");

    cy.getTestId("movie-title").contains("Money Plane");
    cy.getTestId("movie-tagline").contains("The heist of the century");
    cy.getTestId("movie-rating").contains("6.7 / 10");
    cy.getTestId("movie-overview").contains(
      "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals."
    );
    cy.getTestId("movie-release").contains("2020");
    cy.getTestId("movie-length").contains("82");
    cy.getTestId("movie-genres").contains("Action, Crime, Thriller");
    cy.getTestId("movie-budget").contains("568443");
    cy.getTestId("movie-revenue").contains("618");

    cy.get(".react-player-container").should("have.length", 1);

    cy.get(".return-home-button")
      .click()
      .url()
      .should("include", `${Cypress.config("baseUrl")}/`);
  });

  it("Should be able to see details of movie id 585244", () => {
    cy.intercept(
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/585244",
      {
        method: "GET",
        body: {
          movie: {
            id: 585244,
            title: "I Still Believe",
            poster_path:
              "https://image.tmdb.org/t/p/original//dqA2FCzz4OMmXLitKopzf476RVB.jpg",
            backdrop_path:
              "https://image.tmdb.org/t/p/original//21Q8bzu10YF9i4O5amBkJBombYo.jpg",
            release_date: "2020-03-12",
            overview:
              "The true-life story of Christian music star Jeremy Camp and his journey of love and loss that looks to prove there is always hope.",
            average_rating: 3.8333333333333335,
            genres: ["Music", "Drama", "Romance"],
            budget: 12000000,
            revenue: 16069730,
            runtime: 115,
            tagline: "One love can change your life.",
          },
        },
      }
    );

    cy.intercept(
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/585244/videos",
      {
        method: "GET",
        body: {
          videos: [
            {
              id: 1,
              movie_id: 585244,
              key: "YnxHyBbYwQQ",
              site: "YouTube",
              type: "Trailer",
            },
            {
              id: 2,
              movie_id: 585244,
              key: "7Za7-Q8YURM",
              site: "YouTube",
              type: "Trailer",
            },
          ],
        },
      }
    );

    // navigate to the last mock movie
    cy.visit("/#/585244");

    // should have a header and no footer
    cy.get("header");
    cy.get("footer").should("not.exist");

    cy.getTestId("movie-title").contains("I Still Believe");
    cy.getTestId("movie-tagline").contains("One love can change your life");
    cy.getTestId("movie-rating").contains("3.8 / 10");
    cy.getTestId("movie-overview").contains(
      "The true-life story of Christian music star Jeremy Camp and his journey of love and loss that looks to prove there is always hope."
    );
    cy.getTestId("movie-release").contains("2020");
    cy.getTestId("movie-length").contains("115");
    cy.getTestId("movie-genres").contains("Music, Drama, Romance");
    cy.getTestId("movie-budget").contains("12000000");
    cy.getTestId("movie-revenue").contains("16069730");

    cy.get(".react-player-container").should("have.length", 2);

    cy.get(".return-home-button")
      .click()
      .url()
      .should("include", `${Cypress.config("baseUrl")}/`);
  });
});
