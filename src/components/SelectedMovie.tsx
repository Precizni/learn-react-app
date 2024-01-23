import { NavLink, useSearchParams } from "react-router-dom";

function SelectedMovie() {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");
  const id = searchParams.get("id");

  return (
    <div>
      <h2>You selected {name}.</h2>
      <button>
        <NavLink to="/character-info">X</NavLink>
      </button>
    </div>
  );
}

export default SelectedMovie;
