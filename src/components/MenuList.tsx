import { useState } from 'react';
import Books from './Books';
import BooksList from './BooksList';
import Movies from './Movies';
import Characters from './Characters';
import MoviesList from './MoviesList';
import CharacterList from './CharacterList';
import { useFetch } from '../hooks/useFetch';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';

function MenuList() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const { data, isLoading, error } = useFetch(query);

  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        <Books onSetQuery={setQuery} onSetOpen={setOpen} />
        <Movies onSetQuery={setQuery} onSetOpen={setOpen} />
        <Characters onSetOpen={setOpen} onSetQuery={setQuery} />
      </div>

      <div>
        {query === 'book' &&
          (isLoading ? (
            <Loading />
          ) : (
            <BooksList data={data} query={query} onSetQuery={setQuery} />
          ))}
        {error && <ErrorMessage message={error} />}
      </div>
      <div>
        {query === 'movie' &&
          (isLoading ? (
            <Loading />
          ) : (
            <MoviesList data={data} query={query} onSetQuery={setQuery} />
          ))}
        {error && <ErrorMessage message={error} />}
      </div>
      <div>{open && <CharacterList onSetOpen={setOpen} />}</div>
    </div>
  );
}

export default MenuList;
