import React, { useContext, useEffect, useRef, useState } from "react";
import "../components/BookList.scss";
import "./Search.scss";
import BookListfallback from "../components/BookListfallback";
import BookCard from "../components/BookCard";
import { BooksContext } from "../context/BooksContext";

const SearchPage = () => {
  const searchBox = useRef(null);
  const { books, startIndex, setstartIndex, total, error, loading, bookName, changeBookName, changePage, search, setSearch } = useContext(BooksContext);
  
  const formSearch = (event) => {
    event.preventDefault();
    const search_book = event.target.q.value;
    changeBookName(search_book);
    setSearch(true)
  };
  
  useEffect(()=>{
    bookName != "a" ? searchBox.current.value = bookName : "";
    changePage("Search");
  },[])


  if(error){
    return <p>Some Error Occured</p>;
  }

  return (
    <div className="search-page">
      <div className="container">
        <div className="books-wrapper">
          <div className="form-wrapper">
            <form onSubmit={() => formSearch(event)}>
              <input type="text" name="q" placeholder="Enter the book name"  ref={searchBox}/>
              <button>Submit</button>
            </form>
          </div>
          <div className="book-list">
            {search && books?.map((item) => {
              return <BookCard key={item.etag} book={item} />;
            })}
          </div>
          {search && loading && <BookListfallback />}
          {search && total - startIndex > startIndex && (
            <div className="cta-wrapper">
              <button
                className="load-more-btn"
                onClick={() => setstartIndex(startIndex + 36)}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
