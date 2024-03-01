import { NavLink, useSearchParams } from 'react-router-dom';

function SelectedMovie() {
  const [searchParams] = useSearchParams();

  const name = searchParams.get('name');
  const id = searchParams.get('id');
  const nominations = searchParams.get('nominations');
  const awards = searchParams.get('awards');
  const boxOffice = searchParams.get('boxOffice');
  const budget = searchParams.get('budget');
  const score = Math.round(Number(searchParams.get('score')));

  return (
    <div className="flex flex-col items-center">
      <div key={id} className="w-96  pl-5 text-left text-xl italic">
        <h2 className=" text-2xl font-bold">{name}</h2>
        <h3>Critics average score is {score}% ⭐️</h3>
        <h3>
          Nominated for {nominations} Oscar and won {awards} 🏆
        </h3>
        <h3>
          Movie's budget was ${budget} million and
          <br /> box office earnings ${boxOffice} million 💰
        </h3>
      </div>
      <button className="m-5 w-auto rounded-full border-2 border-black p-1 text-center hover:opacity-50">
        <NavLink to="/character-info">Close</NavLink>
      </button>
    </div>
  );
}

export default SelectedMovie;
