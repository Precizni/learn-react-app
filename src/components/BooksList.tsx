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

type BooksListProps = {
  // data: { name: string; _id: string }[];
  data: FetchedData[] | null;
  query: string;
};

function BooksList({ data, query }: BooksListProps) {
  return (
    <div className="my-10 text-center">
      <div className="pb-3 text-xl">List of books to select</div>
      <div className="text-left underline underline-offset-1">
        {query &&
          data?.map((books) => (
            <li key={books._id}>
              <Link to={`selected-book?id=${books._id}&name=${books.name}`}>
                {books.name}
              </Link>
            </li>
          ))}
      </div>
      {/* <button
        type="button"
        onClick={handleClick}
        className="m-5 rounded-full border-2 border-black p-1 hover:opacity-50"
      >
        Close
      </button> */}
    </div>
  );
}

export default BooksList;
