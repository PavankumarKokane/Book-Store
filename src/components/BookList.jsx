import React, { useEffect, useState } from "react";
import "./BookList.scss";
import BookCard from "./BookCard";
import BookListfallback from "./BookListfallback";
import useFetchBooks from "../hooks/useFetchBooks";

const BookList = () => {
  const { books, startIndex, total, loading, error, setstartIndex } = useFetchBooks();

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
      {loading ? <BookListfallback /> : ""}
      {(total - startIndex) > startIndex ? (
        <div className="cta-wrapper">
          <button
            className="load-more-btn"
            onClick={() => setstartIndex(startIndex + 36)}
          >
            Load More
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default BookList;
