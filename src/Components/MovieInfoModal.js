import { Rating } from "react-simple-star-rating";

const MovieInfoModal = ({ selectedMovieInfo, onClose, onRatingChange }) => {
  const handleRating = (rate) => {
    onRatingChange({ rate });
  };

  return (
    <div className="modal-blur">
      <div className="movie-info-box-modal">
        <button className="btn close-modal" onClick={() => onClose(false)}>
          X
        </button>
        <img src={selectedMovieInfo.cover} alt="" />
        <div className="movie-info-text">
          <div className="movie-info-title-description">
            <h1>{selectedMovieInfo.title}</h1>
            <h2>Description: </h2>
            <p>{selectedMovieInfo.description}</p>{" "}
          </div>
          <div className="movie-info-remarks">
            <h2>My Remarks:</h2>
            <p>{selectedMovieInfo.myRemarks}</p>
          </div>

          <div className="movie-info-box-rating">
            <p>Rating: {selectedMovieInfo.rating}</p>
            <Rating
              onClick={handleRating}
              ratingValue={selectedMovieInfo.rating * 10}
              iconsCount={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfoModal;
