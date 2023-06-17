import { createContext, useContext, useEffect, useReducer } from "react";
import { fakeFetch } from "../Database/books";

const BooksContext = createContext();
export const BooksProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INITIAL_BOOKS":
        return { ...state, books: action.payload };
      case "CHANGE_CONTROL":
        return {
          ...state,
          books: state.books.map((book) => {
            if (book.id === action.bookpayload.id) {
              console.log(book, "dfdshfjkh");
              return { ...book, defaultControl: action.controlPayload };
            } else {
              return book;
            }
          }),
        };
      default:
        return state;
    }
  };
  const initialState = {
    books: [],
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
    }
  };
  const selectedControl = (control, id) => {
    const findExactBook = state.books.find((book) => book.id === id);
    dispatch({
      type: "CHANGE_CONTROL",
      bookpayload: findExactBook,
      controlPayload: control,
    });
    console.log(control, findExactBook);
  };
  useEffect(() => {
    fetchAllBooks();
  }, []);
  return (
    <BooksContext.Provider value={{ state, selectedControl }}>
      {children}
    </BooksContext.Provider>
  );
};
export const useBooks = () => useContext(BooksContext);
