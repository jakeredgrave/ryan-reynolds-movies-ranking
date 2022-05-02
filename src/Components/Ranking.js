import Movie from "./Movie";
import MovieInfoModal from "./MovieInfoModal";
const Ranking = ({ moviesList, onSelect }) => {
  return (
    <div className="ranking-box card">
      {moviesList.map((movie) => (
        <Movie key={movie.id} movie={movie} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default Ranking;
