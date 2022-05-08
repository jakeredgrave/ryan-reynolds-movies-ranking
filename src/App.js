import { useEffect, useState } from "react";
import Ranking from "./Components/Ranking";
import AddMovieModal from "./Components/AddMovieModal";
import cover1 from "./Pictures/The-Proposal.jpg";
import cover2 from "./Pictures/The-Voices.jpg";
import cover3 from "./Pictures/The-Adam-Project.jpg";
import MovieInfoModal from "./Components/MovieInfoModal";
function App() {
  const [moviesList, setMoviesList] = useState([
    {
      id: 1,
      title: "The Proposal",
      description: "Guy gets married to his boss.",
      cover: cover1,
      rating: 5,
    },
    {
      id: 2,
      title: "The Voices",
      description: "Guy kills, because his cats tell him to.",
      cover: cover2,
      rating: 9,
    },
    {
      id: 3,
      title: "The Adam Project",
      description:
        "Guy goes back to the future to find his girlfriend, but instead he meets his younger self.",
      cover: cover3,
      rating: 7,
    },
  ]);

  const [showAddMovieForm, setShowAddMovieForm] = useState(false);
  const [showMovieInfoModal, setShowMovieInfoModal] = useState(false);

  // const [selectedMovieInfo, setSelectedMovieInfo] = useState({
  //   id: 0,
  //   title: "",
  //   description: "",
  //   cover: cover2,
  //   myRemarks: "HEHEHE",
  //   rating: 0,
  // });
  const [selectedMovieInfoId, setSelectedMovieInfoId] = useState(1);

  // To chyba zwraca cały obiekt (film) z danym ID
  const selectedMovieInfo = moviesList.find(
    (movie) => movie.id === selectedMovieInfoId
  );
  console.log(selectedMovieInfo);

  // Opening Modal with information about selected movie

  // const openInfoModal = (movie) => {
  //   const selectedMovieInfoCopy = { ...selectedMovieInfo };
  //   setSelectedMovieInfo((selectedMovieInfoCopy) => ({
  //     ...selectedMovieInfoCopy,
  //     ...movie,
  //   }));
  //   setShowMovieInfoModal(!showMovieInfoModal);
  // };
  const openInfoModal = (movie) => {
    setSelectedMovieInfoId(movie.id);
    setShowMovieInfoModal(!showMovieInfoModal);
  };

  // Sorting Movies by rating

  // const sortMovies = () => {
  //   const moviesListCopy = [...moviesList];
  //   const sortedMovies = moviesListCopy.sort((movie1, movie2) =>
  //     movie1.rating < movie2.rating ? 1 : -1
  //   );
  //   console.log(sortedMovies);
  //   setMoviesList(() => [...sortedMovies]);
  // };
  const sortedMovies = [...moviesList].sort(
    (movie1, movie2) => movie2.rating - movie1.rating
  );
  // Changing movie rating

  // const changeRating = ({ movieRating, id }) => {
  //   const moviesListCopy = [...moviesList];
  //   setMoviesList(
  //     moviesListCopy.map((movie) =>
  //       movie.id === id ? { ...movie, rating: parseInt(movieRating) } : movie
  //     )
  //   );
  // };
  const changeRating = ({ rate }) => {
    const id = selectedMovieInfo.id;
    setMoviesList((moviesList) =>
      moviesList.map((movie) =>
        movie.id === id ? { ...movie, rating: parseInt(rate / 10) } : movie
      )
    );
  };
  // USE USEEFFECT to change value of rating inside movieinfomodal and sort movies

  return (
    <div className="App">
      <div className="header">
        <div className="container flex">
          <h1>Ryan Reynolds' Movies Ranking</h1>
          {/* <button onClick={sortMovies}>test</button> */}
        </div>
      </div>

      {/* <Ranking moviesList={moviesList} onSelect={openInfoModal} /> */}
      <Ranking moviesList={sortedMovies} onSelect={openInfoModal} />
      {/* {showAddMovieForm && <AddMovieModal moviesList={moviesList} />} */}
      {showAddMovieForm && <AddMovieModal moviesList={sortedMovies} />}
      {showMovieInfoModal && (
        <MovieInfoModal
          selectedMovieInfo={selectedMovieInfo}
          onClose={setShowMovieInfoModal}
          onRatingChange={changeRating}
        />
      )}
    </div>
  );
}

export default App;
