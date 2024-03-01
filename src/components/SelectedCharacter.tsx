import { useSearchParams } from 'react-router-dom';
import { useCharacter } from '../context/CharacterContext';

function SelectedCharacter() {
  const { data } = useCharacter();
  const [searchParams] = useSearchParams();

  const id = searchParams.get('id');

  return (
    <>
      {data
        ?.filter((select) => select._id.includes(id || ''))
        .map((display) => (
          <div className="mb-10 flex flex-col items-center">
            <div
              key={display._id}
              className="w-96  pl-5 text-center text-xl italic"
            >
              <h2 className=" mb-2 text-2xl font-bold">{display.name}</h2>
              <p>Born: {display.birth || 'no info'}</p>
              <p>Race: {display.race || 'no info'}</p>
              <p>Gender: {display.gender || 'no info'}</p>
              <p>Hair color: {display.hair || 'no info'}</p>
              <p>Died: {display.death || 'no info'}</p>
              <h3 className="mt-2 not-italic">
                For more information:{' '}
                <a
                  href={display.wikiUrl}
                  target="_blank"
                  className="underline underline-offset-1 hover:opacity-50"
                >
                  LOTR wiki
                </a>
              </h3>
            </div>
          </div>
        ))}
    </>
  );
}

export default SelectedCharacter;
