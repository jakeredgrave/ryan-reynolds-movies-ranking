import { useState } from "react";
import Ranking from "./Components/Ranking";
import AddMovieModal from "./Components/AddMovieModal";
import cover1 from "./Pictures/The-Proposal.jpg";
import cover2 from "./Pictures/The-Voices.jpg";
import cover3 from "./Pictures/The-Adam-Project.jpg";
import cover4 from "./Pictures/Definitely-Maybe.jpg";
import cover5 from "./Pictures/Deadpool.jpg";
import cover6 from "./Pictures/Red-Notice.jpg";
import cover7 from "./Pictures/Just-Friends.jpg";
import cover8 from "./Pictures/The-ChangeUp.jpg";
import MovieInfoModal from "./Components/MovieInfoModal";
function App() {
  const [moviesList, setMoviesList] = useState([
    {
      id: 1,
      title: "The Proposal",
      description:
        "Guy works as an assistant for a woman who's a copywrighter and whom everyone absolutely hates. When she realises her visa will expire soon and she'll have to return to Canada; she forces him to pretend they are engaged. In order to pull that whole thing off, they travel to visit his family in Alaska, where their relationship slowly evolves. ",
      myRemarks:
        "Enjoyable and funny. Extremely hilarious scene of Sandra Bullock dancing and rapping around a bonfire. Might by a little simple, but it's still very pleasing to watch.",
      cover: cover1,
      rating: 8,
    },
    {
      id: 2,
      title: "The Voices",
      description:
        "Guy who has schizophrenia and is able to talk with his dog and cat, tries to be a good man, but things don't go so well and he ends up becoming a murderer. Throughout the movie we slowly observe him dwell into his sickness and by so, lose rest of his sanity",
      myRemarks:
        "Absolutely incredible acting by Ryan Reynolds; the way he just flips the switch and makes his character absolutely intimidating and scary is crazy. On top of that, the movie has this special thing going on with the colors; usually we see the world the same way as protagonist, so it's colorful and clean, but on a few occasions we're allowed to see how it looks in reality. The final credits are also something that's worth mentioning, as leave you asking 'what the hell just happened' - trust me.",
      cover: cover2,
      rating: 10,
    },
    {
      id: 3,
      title: "The Adam Project",
      description:
        "Guy goes back to the future to find his girlfriend, but instead he meets his younger self. Now they have to work together to save his girlfriend and fix everything that was messed up with time, by the woman who was a co worker of their (his, I guess, since they both are the same person) deceased father.",
      myRemarks:
        "Movie that started this whole Ryan Reynolds thing for me. Both Ryan and Walker play Adam well. Light story that doesn't make your brain explode with too much information. Beside lots of comedy scenes, there's one with Ryan Reynolds and Jennifer Garner that's really heartwarming and reminds you should always love your mom.",
      cover: cover3,
      rating: 8,
    },
    {
      id: 4,
      title: "Definitely, Maybe",
      description:
        "Guy tell his daughter history of his three 'serious' girlfriends, one of them being the girls mother with whom he's divorced. The girl has to guess which of the women is her mother.",
      myRemarks:
        "A little long, although the story is really well-developed. At the beginning the movie was a bit boring, but gradually it became more and more interesting. Worth watching, if you like romance in movies, but aren't into pure romantic comedies.",
      cover: cover4,
      rating: 8,
    },
    {
      id: 5,
      title: "Deadpool",
      description:
        "Guy who's a mercenary falls in love with a girl, but after a while of happy relationship they discover he has cancer. Soon after, some man tells him they can cure him. Guy accepts the offer and after being tortured for a long time his cancer is gone, but he becomes disfigured man with the superhuman ability of regeneration and physical prowess",
      myRemarks:
        "Ryan is a perfect Deadpool and that's a fact, but the story and the way it's told, unfortunately isn't. For some reason we jump in time to different moments and it really doesn't work well for the movie in my opinion. Most side characters are kinda boring, not to mention the bad guy.",
      cover: cover5,
      rating: 6,
    },
    {
      id: 6,
      title: "Red Notice",
      description:
        "Guy who's the greatest art thief in the world, has to work with a cop to catch another thief who stole his treasure. Cop guy has to work with the thief guy in order to catch the second thief and clear his name.",
      myRemarks:
        "Simple action-comedy movie, nothing new, but it's decent and you can watch it if you need something light.",
      cover: cover6,
      rating: 7,
    },
    {
      id: 7,
      title: "Just Friends",
      description:
        "Guy who was overweight and got rejected by his best friend forever when they were teenagers, ends up in his hometown by accident, after he's been living in LA for 10 years. Now as a handsome man, he tries to seduce her to get revenge, but he realises that his usual tricks don't work on her and he can't escape the friendzone.",
      myRemarks:
        "Absolute trash. Plot is incredibly basic. Characters are not only boring, but some of them are straight up annoying. Don't watch it.",
      cover: cover7,
      rating: 2,
    },
    {
      id: 8,
      title: "The Change-Up",
      description:
        "Guy and his friend are tired of their own lives and wish to have life of the other one, while doing so, they pee into a fountain, during which a blackout occurs, and the next morning they wake up in each other's bodies.",
      myRemarks:
        "Movie isn't innovative, but it does it's job well. A bit too long, because each character took too much time to go through some inner change, by living in the body of the other one.",
      cover: cover8,
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
      <div className="header flex">
        {/* <div className="container flex"> */}
        <h1>Ryan Reynolds' Movies Ranking</h1>
        {/* <button onClick={sortMovies}>test</button> */}
        {/* </div> */}
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
