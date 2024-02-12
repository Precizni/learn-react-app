import { Link } from "react-router-dom";

function BooksList({ data, query, onSetQuery }) {
  function handleClick() {
    onSetQuery("");
  }

  return (
    <>
      <div>List of books to select.</div>
      <button type="button" onClick={handleClick}>
        X
      </button>
      <div>
        {query &&
          data?.map((books) => <ListItem books={books} key={books._id} />)}
      </div>
    </>
  );
}

function ListItem({ books }) {
  const { _id, name } = books;

  return (
    <li>
      <Link to={`selected-book?id=${_id}&name=${name}`}>{name}</Link>
    </li>
  );
}

export default BooksList;
