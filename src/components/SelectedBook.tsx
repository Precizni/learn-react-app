import { NavLink, useNavigate, useSearchParams } from "react-router-dom";

function SelectedBook() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");
  const id = searchParams.get("id");

  return (
    <div>
      <h2>You selected book {name}.</h2>
      <button>
        <NavLink to="/character-info">X</NavLink>
      </button>
    </div>
  );
}

export default SelectedBook;
