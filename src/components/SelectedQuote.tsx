import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";

function SelectedQuote({ quote, query, isLoading, error }) {
  return (
    <>
      <div>
        {query === "character/5cd99d4bde30eff6ebccfd0d/quote" && <h1>SAM</h1>}
      </div>
      <div>
        {query === "character/5cd99d4bde30eff6ebccfea0/quote" && (
          <h1>Gandalf</h1>
        )}
      </div>
      <div>
        {query === "character/5cd99d4bde30eff6ebccfc57/quote" && (
          <h1>Boromir</h1>
        )}
      </div>
      <div>
        {query === "character/5cd99d4bde30eff6ebccfd23/quote" && <h1>Gimli</h1>}
      </div>
      <div>
        {query === "character/5cd99d4bde30eff6ebccfd06/quote" && (
          <h1>Galadriel</h1>
        )}
      </div>
      <div>
        {error ? (
          <ErrorMessage message={error} />
        ) : isLoading ? (
          <Loading />
        ) : (
          <div>{quote}</div>
        )}
      </div>
    </>
  );
}

export default SelectedQuote;
