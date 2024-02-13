import { NavLink } from "react-router-dom";

type CharactersProps = {
  onSetQuery: React.Dispatch<React.SetStateAction<string>>;
  onSetOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Characters({ onSetOpen, onSetQuery }: CharactersProps) {
  function handleClick() {
    onSetOpen(true);
    onSetQuery("");
  }

  return (
    <div>
      Find a character from LOTR
      <button type="button" onClick={handleClick}>
        <NavLink to="/character-info">Select</NavLink>
      </button>
    </div>
  );
}

export default Characters;
