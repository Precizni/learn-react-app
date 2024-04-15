import { Link } from 'react-router-dom';

type FetchedData = {
  academyAwardNominations: number;
  academyAwardWins: number;
  boxOfficeRevenueInMillions: number;
  budgetInMillions: number;
  name: string;
  rottenTomatoesScore: number;
  runtimeInMinutes: number;
  _id: string;
};

type MoviesListProps = {
  data: FetchedData[] | null;
  query: string;
};

type MovieProps = {
  movie: {
    name: string;
    _id: string;
    academyAwardNominations: number;
    academyAwardWins: number;
    boxOfficeRevenueInMillions: number;
    budgetInMillions: number;
    rottenTomatoesScore: number;
    runtimeInMinutes: number;
  };
};

function MoviesList({ data, query }: MoviesListProps) {
  return (
    <div className="my-10 text-center">
      <div className="pb-3 text-xl">List of movies to select</div>
      {/* <button type="button" onClick={handleClick}>
        X
      </button> */}
      <div className="text-left underline underline-offset-1">
        {query &&
          data?.map((movie) => <ListItem movie={movie} key={movie._id} />)}
      </div>
    </div>
  );
}

function ListItem({ movie }: MovieProps) {
  const {
    _id,
    name,
    academyAwardNominations,
    academyAwardWins,
    boxOfficeRevenueInMillions,
    budgetInMillions,
    rottenTomatoesScore,
  } = movie;

  return (
    <li>
      <Link
        to={`selected-movie?id=${_id}&name=${name}&nominations=${academyAwardNominations}&awards=${academyAwardWins}&boxOffice=${boxOfficeRevenueInMillions}&budget=${budgetInMillions}&score=${rottenTomatoesScore}`}
      >
        {name}
      </Link>
    </li>
  );
}

export default MoviesList;
