import { Link } from "react-router-dom";

function CharacterList({ data, query, onSetQuery }) {
  function handleClick() {
    onSetQuery("");
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  // console.log(data?.map((x) => x));
  return (
    <>
      <div>List of characters to select.</div>
      <form onSubmit={handleSubmit}>
        <h1>Search characters 💍</h1>
        <input
          className="search"
          type="text"
          placeholder="submit..."
          value={query}
          onChange={(e) => onSetQuery(e.target.value)}
        />
      </form>

      {/* <div>
        {query &&
            data?.map((movie) => <ListItem movie={movie} key={movie._id} />)}
        </div> */}
      <button type="button" onClick={handleClick}>
        X
      </button>
    </>
  );
}

function ListItem({ movie }) {
  const { _id, name } = movie;

  return (
    <li>
      <Link
        to={`selected-movie?id=${_id}&name=${name}&nominations=${academyAwardNominations}&awards=${academyAwardWins}&boxOffice=${boxOfficeRevenueInMillions}&budget=${budgetInMillions}&score=${rottenTomatoesScore}`}
      >
        {name}
      </Link>
    </li>
  );
}

export default CharacterList;
