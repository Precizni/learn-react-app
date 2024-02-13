import { NavLink } from "react-router-dom";

type MoviesProps = {
  onSetQuery: React.Dispatch<React.SetStateAction<string>>;
  onSetOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Movies({ onSetQuery, onSetOpen }: MoviesProps) {
  function handleClick() {
    onSetQuery("movie");
    onSetOpen(false);
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
