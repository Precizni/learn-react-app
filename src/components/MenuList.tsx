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
  // const [data, isLoading, error] = useFetch(book);

  // console.log(Object.values(data));
  // console.log(data?.filter((lik) => lik.gender === "Male"));
  // const male = data?.filter((lik) => lik.gender === "Male");
  // console.log(male);
  // console.log(male?.filter((x) => x.name === "Bilbo Baggins"));
  // console.log(data.map((x) => x.hair));
  // console.log(query);

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
