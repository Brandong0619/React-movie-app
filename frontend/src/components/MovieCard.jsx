// Import the CSS file for styling the MovieCard component
import "../css/MovieCard.css";

// Import the MovieContext to access shared state and functions
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
    // Destructure functions and state from the MovieContext
    const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();

    // Check if the current movie is already in the favorites list
    const favorite = isFavorite(movie.id);


    function onFavoriteClick(e) {
        e.preventDefault(); // Prevents the default behavior of the button click
        if (favorite) {
            // If the movie is already a favorite, remove it
            removeFromFavorites(movie.id);
        } else {
            // If the movie is not a favorite, add it
            addToFavorites(movie);
        }
    }


    return (
        <div className="movie-card">
            {/* Movie poster section */}
            <div className="movie-poster">
                {/* Display the movie poster image */}
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
                {/* Overlay with the favorite button */}
                <div className="movie-overlay">
                    <button
                        className={`favorite-btn ${favorite ? "active" : ""}`}
                        onClick={onFavoriteClick}
                    >
                        ♥
                    </button>
                </div>
            </div>

            {/* Movie information section */}
            <div className="movie-info">
                {/* Display the movie title */}
                <h3>{movie.title}</h3>
                {/* Display the release year (split from the full release date) */}
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    );
}

export default MovieCard;