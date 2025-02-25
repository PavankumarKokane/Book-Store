import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BookDetailfallback = () => {
  return (
    <div className="book-wrapper">
      <div className="container">
        <div className="main-wrapper">
          <div className="img-wrapper">
            <Skeleton height={773} width={504} />
          </div>
          <div className="content-wrapper">
            <h1>
              <Skeleton width="100%" />
            </h1>
            <p>
              <Skeleton count={5} />
            </p>
            <div className="price-wrapper">
              <p>
                <Skeleton width={100} /> <Skeleton width={60} />
              </p>
            </div>
            <div className="other-detail">
              <p className="author"><Skeleton width={150} /></p>
              <p className="publisher"><Skeleton width={150} /></p>
              <p className="published-date"><Skeleton width={100} /></p>
              <p className="total-page"><Skeleton width={50} /></p>
            </div>
            <div className="cta-wrapper">
              <Skeleton width={200} height={55} />
              <Skeleton width={200} height={55} style={{ marginLeft: "10px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailfallback;
