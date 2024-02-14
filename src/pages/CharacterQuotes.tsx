import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import SelectedQuote from "../components/SelectedQuote";

function CharacterQuotes() {
  const [query, setQuery] = useState("");
  const { data, isLoading, error, number, setNumber } = useFetch(query);

  const sam = "character/5cd99d4bde30eff6ebccfd0d/quote";
  const gandalf = "character/5cd99d4bde30eff6ebccfea0/quote";
  const boromir = "character/5cd99d4bde30eff6ebccfc57/quote";
  const gimli = "character/5cd99d4bde30eff6ebccfd23/quote";
  const galadriel = "character/5cd99d4bde30eff6ebccfd06/quote";

  function randomNumber() {
    return Math.round(Math.random() * Number(data?.length));
  }

  const quote = data?.filter((x, y) => y === number).map((a) => a.dialog);

  function samClick() {
    setQuery(sam);
    setNumber(randomNumber());
  }
  function ganClick() {
    setQuery(gandalf);
    setNumber(randomNumber());
  }
  function borClick() {
    setQuery(boromir);
    setNumber(randomNumber());
  }
  function gimClick() {
    setQuery(gimli);
    setNumber(randomNumber());
  }
  function galClick() {
    setQuery(galadriel);
    setNumber(randomNumber());
  }

  return (
    <div>
      <h2>Character quotes</h2>
      <div>
        Samwise Gamgee
        <button type="button" onClick={samClick}>
          Get a quote
        </button>
      </div>
      <div>
        Gandalf
        <button type="button" onClick={ganClick}>
          Get a quote
        </button>
      </div>
      <div>
        Boromir
        <button type="button" onClick={borClick}>
          Get a quote
        </button>
      </div>
      <div>
        Gimli
        <button type="button" onClick={gimClick}>
          Get a quote
        </button>
      </div>
      <div>
        Galadriel
        <button type="button" onClick={galClick}>
          Get a quote
        </button>
      </div>
      <SelectedQuote
        quote={quote}
        query={query}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}

export default CharacterQuotes;
