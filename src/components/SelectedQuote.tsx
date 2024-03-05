import ErrorMessage from './ErrorMessage';
import Loading from './Loading';

import Sam from '/imgs/Samwise.jpg';
import Gandalf from '/imgs/Gandalf_the_Grey.jpg';
import Boromir from '/imgs/Gimli.jpg';
import Gimli from '/imgs/Boromir.jpg';
import Galadriel from '/imgs/Galadriel.jpg';

type SelectedQuoteProps = {
  quote: string[] | undefined;
  query: string;
  isLoading: boolean;
  error: string;
};

function SelectedQuote({ quote, query, isLoading, error }: SelectedQuoteProps) {
  return (
    <div className="my-16 flex flex-row justify-center">
      {error ? (
        <ErrorMessage message={error} />
      ) : isLoading ? (
        <Loading />
      ) : (
        <div className=" bg-gray-50 shadow-2xl">
          {query === 'character/5cd99d4bde30eff6ebccfd0d/quote' && (
            <img
              src={Sam}
              alt="Samwise"
              className="size-80 rounded-t-xl object-cover"
            />
          )}
          {query === 'character/5cd99d4bde30eff6ebccfea0/quote' && (
            <img
              src={Gandalf}
              alt="Gandalf"
              className="size-80 rounded-t-xl object-cover"
            />
          )}
          {query === 'character/5cd99d4bde30eff6ebccfc57/quote' && (
            <img
              src={Gimli}
              alt="Gimli"
              className="size-80 rounded-t-xl object-cover"
            />
          )}
          {query === 'character/5cd99d4bde30eff6ebccfd23/quote' && (
            <img
              src={Boromir}
              alt="Boromir"
              className="size-80 rounded-t-xl object-cover"
            />
          )}
          {query === 'character/5cd99d4bde30eff6ebccfd06/quote' && (
            <img
              src={Galadriel}
              alt="Galadriel"
              className="size-80 rounded-t-xl object-cover"
            />
          )}
          <div className="w-80 p-10 text-center text-lg italic text-neutral-800">
            {quote}
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectedQuote;
