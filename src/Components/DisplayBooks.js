import { useState } from "react";
import { useBooks } from "../Contexts/BooksProvider";

export const DisplayBook = ({ title, author, image, id }) => {
  const [showOptions, setShowOptions] = useState(false);
  const { selectedControl } = useBooks();
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
                  className="options"
                  onClick={() => selectedControl(option, id)}
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
