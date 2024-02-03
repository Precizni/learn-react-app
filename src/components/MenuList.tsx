import { useState } from "react";
import Books from "./Books";
import BooksList from "./BooksList";
import Movies from "./Movies";
import Characters from "./Characters";
import MoviesList from "./MoviesList";
import CharacterList from "./CharacterList";
import { useFetch } from "../hooks/useFetch";
import Loading from "./Loading";

function MenuList() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(true);
  const [data, isLoading, error] = useFetch(query);

  return (
    <>
      <div>
        {query !== "book" ? (
          <Books onSetQuery={setQuery} onSetOpen={setOpen} />
        ) : isLoading ? (
          <Loading />
        ) : (
          <BooksList data={data} query={query} onSetQuery={setQuery} />
        )}
      </div>
      <div>
        {query !== "movie" ? (
          <Movies onSetQuery={setQuery} onSetOpen={setOpen} />
        ) : isLoading ? (
          <Loading />
        ) : (
          <MoviesList data={data} query={query} onSetQuery={setQuery} />
        )}
      </div>
      <div>
        {open ? (
          <Characters onSetOpen={setOpen} onSetQuery={setQuery} />
        ) : (
          <CharacterList onSetOpen={setOpen} />
        )}
      </div>
    </>
  );
}

export default MenuList;
