import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import SelectedQuote from "../components/SelectedQuote";

function CharacterQuotes() {
  const [query, setQuery] = useState("");
  const [number, setNumber] = useState(0);
  const [data, isLoading, error] = useFetch(query);

  const sam = "character/5cd99d4bde30eff6ebccfd0d/quote";
  const gandalf = "character/5cd99d4bde30eff6ebccfea0/quote";
  const boromir = "character/5cd99d4bde30eff6ebccfc57/quote";
  const gimli = "character/5cd99d4bde30eff6ebccfd23/quote";
  const galadriel = "character/5cd99d4bde30eff6ebccfd06/quote";
  //
  //
  //

  function randomNumber() {
    const num = Math.round(Math.random() * Number(data.length));
    setNumber(num);
  }

  function myFunction(value, index, array) {
    return index === number;
  }

  const quote = data.filter(myFunction);

  function samClick() {
    setQuery(sam);
    randomNumber();
  }
  function ganClick() {
    setQuery(gandalf);
    randomNumber();
  }
  function borClick() {
    setQuery(boromir);
    randomNumber();
  }
  function gimClick() {
    setQuery(gimli);
    randomNumber();
  }
  function galClick() {
    setQuery(galadriel);
    randomNumber();
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
      <div></div>
      <SelectedQuote quote={quote} query={query} isLoading={isLoading} />
    </div>
  );
}

export default CharacterQuotes;
