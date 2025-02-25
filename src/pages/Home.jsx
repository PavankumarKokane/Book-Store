import React, { lazy, Suspense } from "react";
import "./home.scss";
import BookListfallback from "../components/BookListfallback";

const BookList = lazy(() => import("../components/BookList"));

const Home = () => {
  return (
    <div className="home-sec">
      <div className="container">
        <div className="books-wrapper">
          <Suspense fallback={<BookListfallback />}>
            <BookList />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Home;
