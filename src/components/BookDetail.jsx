import React from "react";
import useFetchBook from "../hooks/useFetchBook";
import "./BookDetail.scss";
import BookDetailfallback from "./BookDetailfallback";

const BookDetail = (props) => {
  const BookID = props.bookID;
  const { book, loading, error } = useFetchBook(BookID);
  //console.log(book);

  const stripHtmlTags = (str) => {
    return str.replace(/<\/?[^>]+(>|$)/g, "");
  };

  if (loading) {
    return <BookDetailfallback />
  }
  return (
    <div className="book-wrapper">
      <div className="container">
        <div className="main-wrapper">
          <div className="img-wrapper">
            <img
              loading="eager"
              src={book.volumeInfo.imageLinks.medium ? book.volumeInfo.imageLinks.medium.replace("http://","https://"): book.volumeInfo.imageLinks.thumbnail.replace("http://","https://")}
              height={773}
              width={504}
              alt={book.volumeInfo.title}
            />
          </div>
          <div className="content-wrapper">
            <h1>{book.volumeInfo.title}</h1>
            <p>{stripHtmlTags(book.volumeInfo.description)}</p>
            <div className="price-wrapper">
              {book.saleInfo?.listPrice?.amount >
              book.saleInfo?.retailPrice?.amount ? (
                <p>
                  <span className="currency-code">
                    {book.saleInfo?.listPrice?.currencyCode}
                  </span>
                  <del>{book.saleInfo?.listPrice?.amount}</del>
                  <span className="current-price">
                    {book.saleInfo?.retailPrice?.amount}
                  </span>
                </p>
              ) : (
                <p>
                  <span className="currency-code">
                    {book.saleInfo.listPrice?.currencyCode}
                  </span>{" "}
                  <span className="current-price">
                    {book.saleInfo.retailPrice?.amount}
                  </span>
                </p>
              )}
            </div>
            <div className="other-detail">
              <p className="author">Author : <span>{book.volumeInfo.authors}</span></p>
              <p className="publisher">Publisher: <span>{book.volumeInfo.publisher}</span></p>
              <p className="published-date">Published Date: <span>{book.volumeInfo.publishedDate}</span></p>
              <p className="total-page">Page Count: <span>{book.volumeInfo.pageCount}</span></p>
            </div>
            <div className="cta-wrapper">
              <a href={book.saleInfo.buyLink} className="buy-now" target="_blank">Buy Now</a>
              {
                book.volumeInfo.previewLink ? <a href={book.volumeInfo.previewLink} className="preview" target="_blank">View Now</a> : ""
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
