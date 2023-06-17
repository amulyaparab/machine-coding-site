import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { fakeFetch } from "../Database/books";

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const reducer = (state, action) => {
    switch (action.type) {
      case "INITIAL_BOOKS":
        return { ...state, books: action.payload };
      case "CHANGE_CONTROL":
        return {
          ...state,
          books: state.books.map((book) => {
            if (book.id === action.bookpayload.id) {
              return { ...book, defaultControl: action.controlPayload };
            } else {
              return book;
            }
          }),
          searchedBooks: state?.searchedBooks?.map((book) => {
            if (book?.id === action.bookpayload?.id) {
              return { ...book, defaultControl: action?.controlPayload };
            } else {
              return book;
            }
          }),
        };
      case "SEARCHED_BOOKS":
        const inputByUser = action.payload.toLowerCase().trim();
        const filterBooksByCategories = state.books.filter(
          (book) =>
            book.title.toLowerCase().includes(inputByUser) ||
            book.author.toLowerCase().includes(inputByUser)
        );
        return {
          ...state,
          searchedBooks:
            action.payload.length === 0 ? null : filterBooksByCategories,
          noBooks:
            action.payload.length !== 0 && filterBooksByCategories.length === 0,
        };
      default:
        return state;
    }
  };
  const initialState = {
    books: [],
    searchedBooks: [],
    noBooks: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchAllBooks = async () => {
    try {
      const {
        data: { books },
      } = await fakeFetch("https://example.com/api/books");
      dispatch({ type: "INITIAL_BOOKS", payload: books });
    } catch (err) {
      console.log(err);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };
  const selectedControl = (control, id) => {
    const findExactBook = state.books.find((book) => book.id === id);
    dispatch({
      type: "CHANGE_CONTROL",
      bookpayload: findExactBook,
      controlPayload: control,
    });
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);
  return (
    <BooksContext.Provider
      value={{ state, selectedControl, dispatch, loading, isError }}
    >
      {children}
    </BooksContext.Provider>
  );
};
export const useBooks = () => useContext(BooksContext);
