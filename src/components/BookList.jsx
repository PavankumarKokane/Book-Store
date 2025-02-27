import React, { useContext, useEffect } from "react";
import "./BookList.scss";
import BookCard from "./BookCard";
import BookListfallback from "./BookListfallback";
import { BooksContext } from "../context/BooksContext";

const BookList = () => {
  const { books, setBooks, startIndex, setstartIndex, total, setTotal, error, setError, loading, changeBookName, changePage } = useContext(BooksContext);

  useEffect(()=>{
    changeBookName("a")
    changePage("Home");
  },)

  if (books.length < 1) {
    return <BookListfallback />;
  }

  if(error){
    return <p>Some Error Occured</p>;
  }

  return (
    <>
      <div className="book-list">
        {books?.map((item) => {
          return <BookCard key={item.etag} book={item} />;
        })}
      </div>
      {loading && <BookListfallback />}
      {(total - startIndex) > startIndex && (
        <div className="cta-wrapper">
          <button
            className="load-more-btn"
            onClick={() => setstartIndex(startIndex + 36)}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default BookList;
