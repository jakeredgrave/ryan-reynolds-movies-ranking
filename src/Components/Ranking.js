import Movie from "./Movie";
// import { useEffect } from "react";

const Ranking = ({ moviesList, onSelect }) => {
  // useEffect(() => {
  //   console.log(moviesList);
  // }, [moviesList]);
  return (
    <div className="ranking-box card">
      {moviesList.map((movie, index) => (
        <Movie
          key={movie.id}
          movie={movie}
          onSelect={onSelect}
          movieIndex={index}
        />
      ))}
    </div>
  );
};

export default Ranking;
