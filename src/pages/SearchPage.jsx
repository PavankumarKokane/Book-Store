import React, { useEffect, useState } from "react";
import "../components/BookList.scss";
import "./Search.scss";
import useFetchBooks from "../hooks/useFetchBooks";
import BookListfallback from "../components/BookListfallback";
import BookCard from "../components/BookCard";

const SearchPage = () => {
  const [bookName, setBookName] = useState("");
  const [search,setSearch] = useState(false);
  const { books, startIndex, total, loading, error, setstartIndex, setBooks } = useFetchBooks(bookName);
  const formSearch = (event) => {
    event.preventDefault();
    const search_book = event.target.q.value;
    bookName != search_book ? (setBooks([]), setBookName(search_book), setSearch(true)) : null;
  };

  return (
    <div className="search-page">
      <div className="container">
        <div className="books-wrapper">
          <div className="form-wrapper">
            <form onSubmit={() => formSearch(event)}>
              <input type="text" name="q" placeholder="Enter the book name" />
              <button>Submit</button>
            </form>
          </div>
          <div className="book-list">
            {books?.map((item) => {
              return <BookCard key={item.etag} book={item} />;
            })}
          </div>
          {loading && search ? <BookListfallback /> : ""}
          {total - startIndex > startIndex ? (
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
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
