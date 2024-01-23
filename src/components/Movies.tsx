function Movies({ onSetQuery }) {
  function handleClick() {
    onSetQuery("movie");
  }

  return (
    <div>
      Movies
      <button type="button" onClick={handleClick}>
        Select
      </button>
    </div>
  );
}

export default Movies;
