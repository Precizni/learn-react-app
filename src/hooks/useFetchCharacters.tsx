import { useEffect, useState } from "react";

type Character = {
  birth: string;
  death: string;
  gender: string;
  hair: string;
  height: string;
  name: string;
  race: string;
  realm: string;
  spouse: string;
  wikiUrl: string;
  _id: string;
};

type FetchState<T> = {
  data: T | null;
  isLoading: boolean;
  error: string;
};

export function useFetchCharacters(query: string): FetchState<Character[]> {
  const [data, setData] = useState<Character[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const bearerToken = "NTYqimHirN8VdDdtqTo3";

  useEffect(
    function () {
      async function fetchData() {
        try {
          setIsLoading(true);
          setError("");

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

  return { data, isLoading, error };
}
