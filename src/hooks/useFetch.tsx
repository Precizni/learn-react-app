import { useEffect, useState } from "react";

export function useFetch(query) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [number, setNumber] = useState();

  console.log(number);

  // function randomNumber() {
  //   const num = Math.round(Math.random() * Number(data.length));
  //   setNumber(num);
  // }

  const apiUrl = "https://the-one-api.dev/v2/";
  const bearerToken = "NTYqimHirN8VdDdtqTo3";

  console.log(data);

  useEffect(
    function () {
      async function fetchData() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(`${apiUrl}${query}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${bearerToken}` },
          });

          if (!res.ok) throw new Error("There is a problem with fetching data");

          const data = await res.json();

          setData(data.docs);
          setNumber(Math.round(Math.random() * Number(data.docs.length)));
          setError("");
        } catch (err) {
          console.error(err.message);
          setError(err.message);
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

  return [data, isLoading, error, number, setNumber];
}
