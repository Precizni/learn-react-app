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
    <div className="relative mx-5 mb-20 flex self-center rounded-lg">
      <div>
        {error ? (
          <ErrorMessage message={error} />
        ) : isLoading ? (
          <Loading />
        ) : (
          <div className="min-w-60 max-w-2xl text-xl font-semibold italic text-slate-600">
            {query === 'character/5cd99d4bde30eff6ebccfd0d/quote' && (
              <img
                src={Sam}
                alt="Samwise"
                className="float-left mr-2 size-48 rounded-lg object-cover"
              />
            )}
            {query === 'character/5cd99d4bde30eff6ebccfea0/quote' && (
              <img
                src={Gandalf}
                alt="Gandalf"
                className="float-left mr-2 size-48 rounded-lg object-cover"
              />
            )}
            {query === 'character/5cd99d4bde30eff6ebccfc57/quote' && (
              <img
                src={Gimli}
                alt="Gimli"
                className="float-left mr-2 size-48 rounded-lg object-cover"
              />
            )}
            {query === 'character/5cd99d4bde30eff6ebccfd23/quote' && (
              <img
                src={Boromir}
                alt="Boromir"
                className="float-left mr-2 size-48 rounded-lg object-cover"
              />
            )}
            {query === 'character/5cd99d4bde30eff6ebccfd06/quote' && (
              <img
                src={Galadriel}
                alt="Galadriel"
                className="float-left mr-2 size-48 rounded-lg object-cover"
              />
            )}
            {quote}
          </div>
        )}
      </div>
    </div>
  );
}

export default SelectedQuote;
