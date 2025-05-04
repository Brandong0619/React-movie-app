// Your API key for authenticating requests to The Movie Database (TMDB) API
const API_KEY = "ae7c0c3fbaef0e41eddec2aa9b8b28b5";

// The base URL for all TMDB API requests
const API_URL = "https://api.themoviedb.org/3";

/**
 * Fetches a list of popular movies from the TMDB API.
 * 
 * @returns {Promise<Array>} A promise that resolves to an array of popular movies.
 */
export const getPopularMovies = async () => {
  // Make a GET request to the "popular movies" endpoint
  const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
  
  // Parse the JSON response
  const data = await response.json();
  
  // Return the "results" array, which contains the list of popular movies
  return data.results;
};

/**
 * Searches for movies based on a query string using the TMDB API.
 * 
 * @param {string} query - The search term entered by the user.
 * @returns {Promise<Array>} A promise that resolves to an array of movies matching the search query.
 */
export const SearchMovies = async (query) => {
  // Make a GET request to the "search movies" endpoint with the query string
  const response = await fetch(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  
  // Parse the JSON response
  const data = await response.json();
  
  // Return the "results" array, which contains the list of movies matching the query
  return data.results;
};