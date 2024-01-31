import { useEffect, useState } from "react";

export function useFetchCharacters(query) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  console.log(query);

  // const apiUrl = "https://the-one-api.dev/v2/character?name=/Gan/i";
  const bearerToken = "NTYqimHirN8VdDdtqTo3";

  useEffect(
    function () {
      async function fetchData() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://the-one-api.dev/v2/character?name=/${query}/i`,
            {
              method: "GET",
              headers: { Authorization: `Bearer ${bearerToken}` },
            }
          );

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
      if (query.length < 2) {
        setData([]);
        setError("");
        return;
      }
      fetchData();
    },
    [query]
  );

  return [data, isLoading, error];
}
