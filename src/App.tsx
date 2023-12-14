import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("character?race=Human");
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

  return (
    <>
      <div>NEW START</div>
      {/* <div>{data.url}</div> */}
      {/* <img className="about-page-img" src={data.url} alt="basketballs" /> */}
    </>
  );
}

export default App;
