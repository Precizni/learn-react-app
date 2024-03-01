import { NavLink, useSearchParams } from 'react-router-dom';

function SelectedBook() {
  // const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const name = searchParams.get('name');
  // const id = searchParams.get("id");

  return (
    <div className="flex flex-col items-center">
      <div className="w-96 text-center text-2xl font-bold italic">
        Book is {name}
      </div>
      <div>More info coming soon...</div>
      <button className="m-5 w-auto rounded-full border-2 border-black p-1 text-center hover:opacity-50">
        <NavLink to="/character-info">Close</NavLink>
      </button>
    </div>
  );
}

export default SelectedBook;
