import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Books from "./Books";
import BooksList from "./BooksList";
import Movies from "./Movies";
import Characters from "./Characters";
import MoviesList from "./MoviesList";

function FetchData() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const apiUrl = "https://the-one-api.dev/v2/";
  const bearerToken = "NTYqimHirN8VdDdtqTo3";

  console.log(Object.values(data));
  // console.log(data.map((x) => x.hair));
  // console.log(query);

  useEffect(
    function () {
      async function fetchData() {
        try {
          setIsLoading(true);
          const res = await fetch(`${apiUrl}${query}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${bearerToken}` },
          });

          if (!res.ok) throw new Error("There is a problem with fetching data");

          const data = await res.json();
          setData(data.docs);
          // .then((res) => res.json())
          // .then((dat) => setPlayers(dat.data));
        } catch (err) {
          // console.error(err.message);
          // setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchData();
    },
    [query]
  );

  return (
    <>
      <div>
        {query !== "book" ? (
          <Books onSetQuery={setQuery} />
        ) : (
          <BooksList data={data} query={query} onSetQuery={setQuery} />
        )}
      </div>
      <div>
        {query !== "movie" ? (
          <Movies onSetQuery={setQuery} />
        ) : (
          <MoviesList data={data} query={query} onSetQuery={setQuery} />
        )}
      </div>

      <Characters />
    </>
  );
}

// function Book() {
//   return (
//     <div>
//       Book
//       <button>Select</button>
//     </div>
//   );
// }

// function Movie() {
//   return (
//     <div>
//       Movie
//       <button>Select</button>
//     </div>
//   );
// }

// function Character() {
//   return (
//     <div>
//       Character
//       <button>Select</button>
//     </div>
//   );
// }

export default FetchData;
