import { useSearchParams } from "react-router-dom";
import { useCharacter } from "../context/CharacterContext";

function SelectedCharacter() {
  const { data } = useCharacter();
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  return (
    <div>
      {data
        ?.filter((select) => select._id.includes(id))
        .map((display) => (
          <div key={display._id}>
            <h2>{display.name}</h2>
            <p>Born: {display.birth}</p>
            <p>Race: {display.race}</p>
            <p>Gender: {display.gender}</p>
            <p>Hair color: {display.hair}</p>
            <p>Died: {display.death}</p>
            <h3>
              Link for more information:{" "}
              <a href={display.wikiUrl} target="_blank">
                LOTR wiki
              </a>
            </h3>
          </div>
        ))}
    </div>
  );
}

export default SelectedCharacter;
