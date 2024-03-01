import { Link, NavLink } from 'react-router-dom';
import { useCharacter } from '../context/CharacterContext';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';

type CharacterListProps = {
  onSetOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type CharListProps = {
  _id: string;
  name: string;
};

function CharacterList({ onSetOpen }: CharacterListProps) {
  const { query, setQuery, data, isLoading, error } = useCharacter();

  function handleClick() {
    onSetOpen(false);
    setQuery('');
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="my-10 text-center">
      <form onSubmit={handleSubmit}>
        <h1 className="mb-3 text-xl">Search characters</h1>
        <input
          className="rounded-md border-2 p-1 shadow-md focus:outline-stone-500"
          type="text"
          placeholder="submit..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="button"
          onClick={handleClick}
          className="m-5 rounded-full border-2 border-stone-500 p-1 hover:opacity-50"
        >
          <NavLink to="/character-info">Close</NavLink>
        </button>
      </form>

      <div className="mt-5 flex max-h-40 list-none flex-col overflow-auto rounded-lg bg-slate-100 drop-shadow-md">
        {error && <ErrorMessage message={error} />}
        {query &&
          (isLoading ? (
            <Loading />
          ) : (
            data?.map((characters) => (
              <ListItem characters={characters} key={characters._id} />
            ))
          ))}
      </div>
    </div>
  );
}

function ListItem({ characters }: { characters: CharListProps }) {
  const { _id, name } = characters;

  return (
    <div className="p-3">
      <li>
        <Link to={`${name}?id=${_id}`}>{name}</Link>
      </li>
    </div>
  );
}

export default CharacterList;
