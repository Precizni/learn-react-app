import { createContext, useContext, useState } from "react";
import { useFetchCharacters } from "../hooks/useFetchCharacters";

const CharacterContext = createContext();

function CharacterProvider({ children }) {
  const [query, setQuery] = useState("");
  const [data, isLoading, error] = useFetchCharacters(query);

  return (
    <CharacterContext.Provider
      value={{ query, setQuery, data, isLoading, error }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

function useCharacter() {
  const context = useContext(CharacterContext);
  if (context === undefined)
    throw new Error("CharacterContext was used outside CharacterProvider");
  return context;
}

export { CharacterProvider, useCharacter };
