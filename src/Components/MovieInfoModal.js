const MovieInfoModal = ({ selectedMovieInfo, onClose }) => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfoModal;
