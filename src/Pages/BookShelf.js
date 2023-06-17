import { DisplayBook } from "../Components/DisplayBooks";
import { useBooks } from "../Contexts/BooksProvider";

export const BookShelf = () => {
  const { state, loading, isError } = useBooks();
  const filterBooks = (control) => {
    const filteredByControl = state?.books.filter(
      (book) => book.defaultControl === control
    );
    return filteredByControl;
  };

  return (
    <>
      {isError ? (
        <h1>Something went wrong.</h1>
      ) : (
        <>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              <h1 className="heading">Currently Reading</h1>
              {filterBooks("Currently Reading").length === 0 && (
                <h2>No Books Here. Please Add Some.</h2>
              )}
              <div className="books-category">
                {filterBooks("Currently Reading")?.map((book) => (
                  <DisplayBook {...book} key={book?.id} />
                ))}
              </div>

              <hr />
              <h1 className="heading">Want To Read</h1>
              {filterBooks("Want to read").length === 0 && (
                <h2>No Books Here. Please Add Some.</h2>
              )}
              <div className="books-category">
                {filterBooks("Want to read")?.map((book) => (
                  <DisplayBook {...book} key={book?.id} />
                ))}
              </div>
              <hr />
              <h1 className="heading">Read</h1>
              {filterBooks("Read").length === 0 && (
                <h2>No Books Here. Please Add Some.</h2>
              )}
              <div className="books-category">
                {filterBooks("Read")?.map((book) => (
                  <DisplayBook {...book} key={book?.id} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
