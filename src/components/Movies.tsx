import { NavLink } from "react-router-dom";

function Movies({ onSetQuery, onSetOpen }) {
  function handleClick() {
    onSetQuery("movie");
    onSetOpen(true);
  }

  return (
    <div>
      Movies
      <button type="button" onClick={handleClick}>
        <NavLink to="/character-info">Select</NavLink>
      </button>
    </div>
  );
}

export default Movies;
