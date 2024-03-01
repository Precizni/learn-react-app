import { NavLink } from 'react-router-dom';

type MoviesProps = {
  onSetQuery: React.Dispatch<React.SetStateAction<string>>;
  onSetOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Movies({ onSetQuery, onSetOpen }: MoviesProps) {
  function handleClick() {
    onSetQuery('movie');
    onSetOpen(false);
  }

  return (
    <NavLink
      to="/character-info"
      onClick={handleClick}
      className="mx-9 my-3 rounded-lg p-2 outline outline-2 outline-offset-1 outline-black hover:bg-amber-300"
    >
      <div className="text-lg">Movies</div>
    </NavLink>
  );
}

export default Movies;
