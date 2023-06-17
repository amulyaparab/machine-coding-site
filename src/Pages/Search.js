import { useNavigate } from "react-router-dom";
import { DisplayBook } from "../Components/DisplayBooks";
import { useBooks } from "../Contexts/BooksProvider";

export const Search = () => {
  const { dispatch, state, isError } = useBooks();
  const navigate = useNavigate();
  return (
    <>
      {isError ? (
        <h1>Something went wrong.</h1>
      ) : (
        <>
          <i
            class="fa-solid fa-arrow-left arrow"
            onClick={() => navigate("/")}
          ></i>
          <h1 className="heading">Search</h1>

          <div className="search">
            <input
              className="searchbar"
              onChange={(event) =>
                dispatch({
                  type: "SEARCHED_BOOKS",
                  payload: event.target.value,
                })
              }
            />
            <i class="fa-solid fa-magnifying-glass icon"></i>
            <div className="books-category search-books">
              {state?.searchedBooks?.map((book) => (
                <DisplayBook {...book} key={book?.id} />
              ))}
            </div>
          </div>
          {state?.noBooks && <h1>No Books Found.</h1>}
        </>
      )}
    </>
  );
};
