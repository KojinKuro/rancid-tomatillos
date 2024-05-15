describe("template spec", () => {
  it("passes", () => {
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

    // test first movie
    cy.visit("/694919");
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

    // test last movie page
    // cy.visit("/760104");
  });
});
