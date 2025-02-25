import React from "react";
import "./BookList.scss";
import BookCardfallback from "./BookCardfallback";

const BookListfallback = () => {
  return (
    <div className="book-list fallback">
      {Array.from({ length: 12 }).map((_, index) => (
        <BookCardfallback key={index} />
      ))}
    </div>
  );
};

export default BookListfallback;