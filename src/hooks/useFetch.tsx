import { useEffect, useState } from "react";

type FetchedData = {
  academyAwardNominations: number;
  academyAwardWins: number;
  boxOfficeRevenueInMillions: number;
  budgetInMillions: number;
  name: string;
  rottenTomatoesScore: number;
  runtimeInMinutes: number;
  _id: string;
  character: string;
  dialog: string;
  id: string;
  movie: string;
};

type FetchState<T> = {
  data: T | null;
  isLoading: boolean;
  error: string;
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
};

export function useFetch(query: string): FetchState<FetchedData[]> {
  const [data, setData] = useState<FetchedData[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [number, setNumber] = useState<number>(0);

  const apiUrl = "https://the-one-api.dev/v2/";
  const bearerToken = "NTYqimHirN8VdDdtqTo3";

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
          console.error((err as Error)?.message);
          setError((err as Error)?.message);
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

  return { data, isLoading, error, number, setNumber };
}
