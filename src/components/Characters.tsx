import { NavLink } from 'react-router-dom';

type CharactersProps = {
  onSetQuery: React.Dispatch<React.SetStateAction<string>>;
  onSetOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Characters({ onSetOpen, onSetQuery }: CharactersProps) {
  function handleClick() {
    onSetOpen(true);
    onSetQuery('');
  }

  return (
    <NavLink
      to="/character-info"
      onClick={handleClick}
      className="my-3 rounded-lg p-2 outline outline-2 outline-offset-1 outline-black hover:bg-amber-300"
    >
      <div className="text-lg">Characters</div>
    </NavLink>
  );
}

export default Characters;
