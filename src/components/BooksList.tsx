import { Link } from "react-router-dom";

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
  onSetQuery: React.Dispatch<React.SetStateAction<string>>;
};

function BooksList({ data, query, onSetQuery }: BooksListProps) {
  function handleClick() {
    onSetQuery("");
  }

  return (
    <>
      <div>List of books to select.</div>
      <button type="button" onClick={handleClick}>
        X
      </button>
      <div>
        {query &&
          data?.map((books) => (
            <li key={books._id}>
              <Link to={`selected-book?id=${books._id}&name=${books.name}`}>
                {books.name}
              </Link>
            </li>
          ))}
      </div>
    </>
  );
}

export default BooksList;
