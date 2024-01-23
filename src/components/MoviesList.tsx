import { Link } from "react-router-dom";

function MoviesList({ data, query, onSetQuery }) {
  function handleClick() {
    onSetQuery("");
  }
  // console.log(data?.map((x) => x));
  return (
    <>
      <div>List of movies to select.</div>
      <button type="button" onClick={handleClick}>
        X
      </button>
      <div>
        {query &&
          data?.map((movie) => <ListItem movie={movie} key={movie._id} />)}
      </div>
    </>
  );
}

function ListItem({ movie }) {
  const { _id, name } = movie;

  return (
    <li>
      <Link to={`selected-movie?id=${_id}&name=${name}`}>{name}</Link>
    </li>
  );
}

export default MoviesList;
