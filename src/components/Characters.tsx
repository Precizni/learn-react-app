import { NavLink } from "react-router-dom";

function Characters({ onSetOpen, onSetQuery }) {
  function handleClick() {
    onSetOpen(false);
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
