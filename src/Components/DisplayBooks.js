import { useState } from "react";
import { useBooks } from "../Contexts/BooksProvider";

export const DisplayBook = ({ title, author, image, id, defaultControl }) => {
  const [showOptions, setShowOptions] = useState(false);
  const { selectedControl } = useBooks();
  const isItemPresent = (option) => {
    const isItemPresent = defaultControl === option;
    return isItemPresent;
  };
  return (
    <div className="books">
      <div>
        <img src={image} alt={title} />
        <p>{title}</p>
        <p>{author}</p>
        <button onClick={() => setShowOptions(!showOptions)}>Expand</button>
        {showOptions && (
          <div className="options-block">
            <p className="move-to">Move to...</p>
            {["Currently Reading", "Want to read", "Read", "None"].map(
              (option) => (
                <p
                  className={`options ${
                    isItemPresent(option) ? "active" : ""
                  } `}
                  onClick={() => {
                    selectedControl(option, id);
                    setShowOptions(false);
                  }}
                >
                  {option}
                </p>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};
