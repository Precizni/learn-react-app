import { NavLink } from 'react-router-dom';

type BooksProps = {
  onSetQuery: React.Dispatch<React.SetStateAction<string>>;
  onSetOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Books({ onSetQuery, onSetOpen }: BooksProps) {
  function handleClick() {
    onSetQuery('book');
    onSetOpen(false);
  }

  return (
    <NavLink
      to="/character-info"
      className="my-3 rounded-lg p-2 outline outline-2 outline-offset-1 outline-black hover:bg-amber-300"
      onClick={handleClick}
    >
      <div className="text-lg">Books</div>
    </NavLink>
  );
}

export default Books;
