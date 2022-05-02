const AddMovieModal = () => {
  return (
    <div className="modal-blur">
      <div className="add-movie-form card">
        <div className="form-control">
          <input type="text" name="title" placeholder="Title" />
          <input type="text" name="description" placeholder="Description" />
        </div>
      </div>
    </div>
  );
};

export default AddMovieModal;
