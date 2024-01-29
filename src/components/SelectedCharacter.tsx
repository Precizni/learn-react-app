import { NavLink, useSearchParams } from "react-router-dom";

function SelectedCharacter() {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");
  const id = searchParams.get("id");
  const nominations = searchParams.get("nominations");
  const awards = searchParams.get("awards");
  const boxOffice = searchParams.get("boxOffice");
  const budget = searchParams.get("budget");
  const score = searchParams.get("score");

  return (
    <div>
      <h2>You selected movie {name}.</h2>
      <h3>Critics average score of {score}/100.</h3>
      <h3>Number of oscar nominations {nominations}.</h3>
      <h3>Oscars won {awards}.</h3>
      <h3>Movie's budget {budget} $ million.</h3>
      <h3>Box office earnings {boxOffice} $ million.</h3>
      <button>
        <NavLink to="/character-info">X</NavLink>
      </button>
    </div>
  );
}

export default SelectedCharacter;
