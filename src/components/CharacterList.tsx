import { Link, NavLink, useNavigate } from "react-router-dom";
import { useFetchCharacters } from "../hooks/useFetchCharacters";
import { useState } from "react";

function CharacterList({ onSetOpen }) {
  // const navigate = useNavigate();

  function handleClick() {
    onSetOpen(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  const [query, setQuery] = useState("");
  const [data, isLoading, error] = useFetchCharacters(query);

  console.log(data);

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
          // value={query}
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
      <Link to={"selected-character"}>{name}</Link>
    </li>
  );
}

export default CharacterList;
