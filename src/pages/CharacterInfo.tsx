import { useEffect, useState } from "react";

function CharacterInfo() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("character?race=Maiar");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const apiUrl = "https://the-one-api.dev/v2/";
  const bearerToken = "NTYqimHirN8VdDdtqTo3";

  console.log(data);
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
          setData(data);
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

  return <div>Character search</div>;
}

export default CharacterInfo;
