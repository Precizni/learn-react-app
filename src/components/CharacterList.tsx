import { Link, NavLink } from "react-router-dom";
import { useCharacter } from "../context/CharacterContext";

function CharacterList({ onSetOpen }) {
  const { query, setQuery, data, isLoading, error } = useCharacter();

  function handleClick() {
    onSetOpen(true);
    setQuery("");
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <div>List of characters to select.</div>
      <form onSubmit={handleSubmit}>
        <h1>Search characters 👑</h1>
        <input
          className="search"
          type="text"
          placeholder="submit..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      <div>
        {query &&
          data?.map((characters) => (
            <ListItem characters={characters} key={characters._id} />
          ))}
      </div>
      <button type="button" onClick={handleClick}>
        <NavLink to="/character-info">X</NavLink>
      </button>
    </>
  );
}

function ListItem({ characters }) {
  const { _id, name } = characters;

  return (
    <li>
      <Link to={`${name}?id=${_id}`}>{name}</Link>
    </li>
  );
}

export default CharacterList;
