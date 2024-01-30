import { NavLink } from "react-router-dom";

function Books({ onSetQuery, onSetOpen }) {
  function handleClick() {
    onSetQuery("book");
    onSetOpen(true);
  }

  return (
    <div>
      Books
      <button type="button" onClick={handleClick}>
        <NavLink to="/character-info">Select</NavLink>
      </button>
    </div>
  );
}

export default Books;
