import Movie from "./Movie";

const Ranking = ({ moviesList, onSelect }) => {
  return (
    <div className="ranking-box card">
      {moviesList.map((movie, index) => (
        <>
          <Movie
            key={movie.id}
            movie={movie}
            onSelect={onSelect}
            movieIndex={index}
          />
        </>
      ))}
    </div>
  );
};

export default Ranking;
