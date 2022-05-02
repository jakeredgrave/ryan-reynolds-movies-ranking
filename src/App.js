import { useState } from "react";
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
      rating: 8,
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
      rating: 8,
    },
  ]);
  const [showAddMovieForm, setShowAddMovieForm] = useState(false);
  const [showMovieInfoModal, setShowMovieInfoModal] = useState(false);

  const [selectedMovieInfo, setSelectedMovieInfo] = useState({
    id: 0,
    title: "",
    description: "",
    cover: cover2,
    myRemarks: "",
    rating: 0,
  });

  const openInfoModal = (movie) => {
    setSelectedMovieInfo((selectedMovieInfo) => ({
      ...selectedMovieInfo,
      ...movie,
    }));
    setShowMovieInfoModal(!showMovieInfoModal);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="container flex">
          <h1>Ryan Reynolds' Movies Ranking</h1>
        </div>
      </div>

      <Ranking moviesList={moviesList} onSelect={openInfoModal} />
      {showAddMovieForm && <AddMovieModal moviesList={moviesList} />}
      {showMovieInfoModal && (
        <MovieInfoModal
          selectedMovieInfo={selectedMovieInfo}
          onClose={setShowMovieInfoModal}
        />
      )}
    </div>
  );
}

export default App;
