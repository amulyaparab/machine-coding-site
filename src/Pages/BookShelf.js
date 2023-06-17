import { DisplayBook } from "../Components/DisplayBooks";
import { useBooks } from "../Contexts/BooksProvider";

export const BookShelf = () => {
  const { state } = useBooks();
  const filterBooks = (control) => {
    const filteredByControl = state?.books.filter(
      (book) => book.defaultControl === control
    );
    return filteredByControl;
  };
  return (
    <>
      <h1>Currently Reading</h1>
      <div className="books-category">
        {filterBooks("currentlyReading")?.map((book) => (
          <DisplayBook {...book} />
        ))}
      </div>
      <h1>Want To Read</h1>
      <div className="books-category">
        {filterBooks("Want to read")?.map((book) => (
          <DisplayBook {...book} />
        ))}
      </div>
      <h1>Read</h1>
      <div className="books-category">
        {filterBooks("read")?.map((book) => (
          <DisplayBook {...book} />
        ))}
      </div>
    </>
  );
};
