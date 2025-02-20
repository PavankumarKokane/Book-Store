import React from "react";
import "./BookCard.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BookCardfallback = () => {
  return (
    <div className="book-card">
      <div className="img-box">
        <Skeleton width={128} height={195} />
      </div>
      <div className="content">
        <h2 className="title">
          <Skeleton height={14} width="100%" />
        </h2>
        <div>
          <p className="author">
            <Skeleton height={14} width="60%" />
          </p>
          <p className="publisher">
            <Skeleton height={14} width="80%" />
          </p>
          <p className="categories">
            <Skeleton height={14} width="60%" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCardfallback;
