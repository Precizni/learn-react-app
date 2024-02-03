import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

function CharacterQuotes() {
  const [query, setQuery] = useState();
  const [number, setNumber] = useState();
  const [dataLength, setDataLength] = useState();
  const [data, isLoading, error] = useFetch(query);

  // const SamUrl = "character/5cd99d4bde30eff6ebccfd0d/quote";

  function length() {
    setDataLength(query && Number(data.length));
  }

  function randomQuote() {
    setNumber(dataLength && Math.round(Math.random() * dataLength));
  }

  console.log(query);
  console.log(number);
  console.log(dataLength);
  console.log(data);

  // function random() {
  //   return Math.random();
  // }

  // console.log(Math.round(Math.random() * 10));
  // console.log(data);
  // console.log(data.length);

  function samClick() {
    setQuery("character/5cd99d4bde30eff6ebccfd0d/quote");
    length();
    randomQuote();
    // setNumber();
  }
  // console.log(data);
  // console.log(data[22].dialog);
  // console.log(data.map((x) => x.dialog));

  return (
    <div>
      <h2>Character quotes</h2>
      <h4>Samwise Gamgee</h4>
      <button type="button" onClick={samClick}>
        Click
      </button>
      <div>{query && data[number].dialog}</div>
    </div>
  );
}

export default CharacterQuotes;

function ListItem() {
  return <div>bzv</div>;
}
