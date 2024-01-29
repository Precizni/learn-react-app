import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Books from "./Books";
import BooksList from "./BooksList";
import Movies from "./Movies";
import Characters from "./Characters";
import MoviesList from "./MoviesList";
import Loader from "./Loader";
import CharacterList from "./CharacterList";
import { useFetch } from "../hooks/useFetch";
import Loading from "./Loading";

function FetchData() {
  const [query, setQuery] = useState("character?name=/Gan/i");
  const [book, setBook] = useState("character?name=/Gan/i");
  const [movie, setMovie] = useState("character?name=/Gan/i");

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
        {/* {isLoading && <Loader />} */}
        {query !== "book" ? (
          <Books onSetQuery={setQuery} />
        ) : isLoading ? (
          <Loading />
        ) : (
          <BooksList data={data} query={query} onSetQuery={setQuery} />
        )}
      </div>
      <div>
        {query !== "movie" ? (
          <Movies onSetQuery={setQuery} />
        ) : isLoading ? (
          <Loading />
        ) : (
          <MoviesList data={data} query={query} onSetQuery={setQuery} />
        )}
      </div>
      <div>
        {query !== "character" ? (
          <Characters onSetQuery={setQuery} />
        ) : (
          <CharacterList data={data} query={query} onSetQuery={setQuery} />
        )}
      </div>
    </>
  );
}

export default FetchData;
