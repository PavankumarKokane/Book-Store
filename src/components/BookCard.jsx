import React from "react";
import { Link } from "react-router";
import "./BookCard.scss"

const BookCard = (props) => {
  const item = props.book;
  return (
    <Link to={`/book/${item.id}`} key={item.etag}>
      <div className="book-card">
        <div className="img-box">
          <img
            loading="lazy"
            src={item.volumeInfo.imageLinks?.thumbnail}
            alt={item.volumeInfo.title}
            width={128}
            height={195}
          />
        </div>
        <div className="content">
          <h2 className="title">{item.volumeInfo.title}</h2>
          <div>
            <p className="author">
              <strong>Author:</strong> {item.volumeInfo?.authors}
            </p>
            <p className="publisher">
              <strong>Publisher:</strong> {item.volumeInfo?.publisher}
            </p>
            {item.volumeInfo.categories && (
              <p className="categories">
                <strong>Categories:</strong>{" "}
                {item.volumeInfo.categories.join(", ")}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
