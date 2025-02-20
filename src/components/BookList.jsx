import React, { useEffect, useState } from "react";
import "./BookList.scss";
import BookCard from "./BookCard";
import BookListfallback from "./BookListfallback";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [startIndex, setstartIndex] = useState(0);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(true);
  const getBooks = async () => {
    setLoading(true);
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=a&orderBy=newest&maxResults=12&startIndex=${startIndex}`
    );
    const data = await res.json();
    console.log(data);
    setBooks([...books, ...data.items]);
    setTotal(data.totalItems);
    setLoading(false);
  };
  useEffect(() => {
    getBooks();
  }, [startIndex]);

  if (books.length < 0) {
    return <BookListfallback />;
  }

  return (
    <>
      <div className="book-list">
        {books?.map((item) => {
          return <BookCard key={item.id} book={item} />;
        })}
      </div>
      {loading ? <BookListfallback /> : ""}
      {total - 20 * startIndex > 20 * startIndex ? (
        <div className="cta-wrapper">
          <button
            className="load-more-btn"
            onClick={() => setstartIndex(startIndex + 12)}
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
