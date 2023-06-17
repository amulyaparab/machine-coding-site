import { DisplayBook } from "../Components/DisplayBooks";
import { useBooks } from "../Contexts/BooksProvider";

export const Search = () => {
  const { dispatch, state } = useBooks();
  return (
    <>
      <h1 className="heading">Search</h1>
      <div className="search">
        <input
          className="searchbar"
          onChange={(event) =>
            dispatch({ type: "SEARCHED_BOOKS", payload: event.target.value })
          }
        />
        <i class="fa-solid fa-magnifying-glass icon"></i>
        {state?.searchedBooks?.map((book) => (
          <DisplayBook {...book} />
        ))}
      </div>
    </>
  );
};
