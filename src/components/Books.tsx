import { NavLink } from "react-router-dom";

type BooksProps = {
  onSetQuery: React.Dispatch<React.SetStateAction<string>>;
  onSetOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Books({ onSetQuery, onSetOpen }: BooksProps) {
  function handleClick() {
    onSetQuery("book");
    onSetOpen(false);
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
