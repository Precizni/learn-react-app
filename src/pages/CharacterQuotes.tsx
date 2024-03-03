import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import SelectedQuote from '../components/SelectedQuote';

function CharacterQuotes() {
  const [query, setQuery] = useState('');
  const { data, isLoading, error, number, setNumber } = useFetch(query);

  const sam = 'character/5cd99d4bde30eff6ebccfd0d/quote';
  const gandalf = 'character/5cd99d4bde30eff6ebccfea0/quote';
  const boromir = 'character/5cd99d4bde30eff6ebccfc57/quote';
  const gimli = 'character/5cd99d4bde30eff6ebccfd23/quote';
  const galadriel = 'character/5cd99d4bde30eff6ebccfd06/quote';

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
    <>
      <h2 className="mb-7 mt-10 text-center text-4xl font-bold">
        Character quotes
      </h2>
      <div className="mb-10 flex flex-wrap justify-evenly">
        <div
          onClick={samClick}
          className="my-3 cursor-pointer rounded-lg p-2 outline outline-2 outline-offset-1 outline-black hover:bg-amber-300"
        >
          Sam
        </div>
        <div
          onClick={ganClick}
          className="my-3 cursor-pointer rounded-lg p-2 outline outline-2 outline-offset-1 outline-black hover:bg-amber-300"
        >
          Gandalf
        </div>
        <div
          onClick={borClick}
          className="my-3 cursor-pointer rounded-lg p-2 outline outline-2 outline-offset-1 outline-black hover:bg-amber-300"
        >
          Boromir
        </div>
        <div
          onClick={gimClick}
          className="my-3 cursor-pointer rounded-lg p-2 outline outline-2 outline-offset-1 outline-black hover:bg-amber-300"
        >
          Gimli
        </div>
        <div
          onClick={galClick}
          className="my-3 cursor-pointer rounded-lg p-2 outline outline-2 outline-offset-1 outline-black hover:bg-amber-300"
        >
          Galadriel
        </div>
      </div>
      <SelectedQuote
        quote={quote}
        query={query}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
}

export default CharacterQuotes;
