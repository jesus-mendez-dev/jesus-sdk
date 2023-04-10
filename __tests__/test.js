const sdk = require("../index");

const TOKEN = "AqAXerf87F_lBGknJDI7";
const MOVIE_ID = "5cd95395de30eff6ebccde5d";

describe("SDK", () => {
  describe("#getAllMovieData()", () => {
    it("should return an array of movies", async () => {
      const movies = await sdk.getAllMovieData(TOKEN);
      expect(Array.isArray(movies.docs)).toBe(true);
      expect(movies.docs.length).toBeGreaterThan(0);
    });
  });

  describe("#getOneMovieData()", () => {
    it("should return data for one movie", async () => {
      const movieData = await sdk.getOneMovieData(MOVIE_ID, TOKEN);
      expect(typeof movieData).toBe("object");
      expect(movieData.docs[0]._id).toBe(MOVIE_ID);
    });
  });

  describe("#getOneMovieQuotes()", () => {
    it("should return an array of quotes for one movie", async () => {
      const quotes = await sdk.getOneMovieQuotes(MOVIE_ID, TOKEN);
      expect(Array.isArray(quotes.docs)).toBe(true);
      expect(quotes.docs.length).toBeGreaterThan(0);
      quotes.docs.forEach((quote) => {
        expect(quote.movie).toBe(MOVIE_ID);
      });
    });
  });
});