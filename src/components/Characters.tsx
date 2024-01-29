function Characters({ onSetQuery }) {
  function handleClick() {
    onSetQuery("character");
  }

  return (
    <div>
      Find a character from LOTR
      <button type="button" onClick={handleClick}>
        Select
      </button>
    </div>
  );
}

export default Characters;
