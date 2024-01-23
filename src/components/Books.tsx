function Books({ onSetQuery }) {
  function handleClick() {
    onSetQuery("book");
  }

  return (
    <div>
      Books
      <button type="button" onClick={handleClick}>
        Select
      </button>
    </div>
  );
}

export default Books;
