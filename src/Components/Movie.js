import MovieInfoModal from "./MovieInfoModal";

const Movie = ({ movie, onSelect }) => {
  return (
    <div className="movie-box" onClick={() => onSelect(movie)}>
      <div>{movie.id}</div>
      <img src={movie.cover} alt="" />
      <div className="movie-title-description">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
      </div>
      <div className="movie-rating">
        <h3>Rating</h3>
        {movie.rating}
      </div>
    </div>
  );
};

export default Movie;
