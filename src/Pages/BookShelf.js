import { DisplayBook } from "../Components/DisplayBooks";
import { useBooks } from "../Contexts/BooksProvider";

export const BookShelf = () => {
  const { state, loading } = useBooks();
  const filterBooks = (control) => {
    const filteredByControl = state?.books.filter(
      (book) => book.defaultControl === control
    );
    return filteredByControl;
  };
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1 className="heading">Currently Reading</h1>
          <div className="books-category">
            {filterBooks("Currently Reading")?.map((book) => (
              <DisplayBook {...book} />
            ))}
          </div>
          <hr />
          <h1 className="heading">Want To Read</h1>
          <div className="books-category">
            {filterBooks("Want to read")?.map((book) => (
              <DisplayBook {...book} />
            ))}
          </div>
          <hr />
          <h1 className="heading">Read</h1>
          <div className="books-category">
            {filterBooks("Read")?.map((book) => (
              <DisplayBook {...book} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
