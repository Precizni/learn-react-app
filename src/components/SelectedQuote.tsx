import Loading from "./Loading";

function SelectedQuote({ quote, query, isLoading }) {
  console.log(quote);
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
      <div>{isLoading ? <Loading /> : quote.map((x) => <p>{x.dialog}</p>)}</div>
    </>
  );
}

export default SelectedQuote;
