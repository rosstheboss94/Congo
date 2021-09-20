import { useEffect, useReducer } from "react";
import { useParams } from "react-router";
import { Row, Col } from "react-bootstrap";
import "./reviews.scss";
import ReviewStats from "./reviewstats/reviewstats";

const reviewReducer = (state, action) => {
  if (action.type === "SET-REVIEW") {
    return { reviewData: action.reviews, reviewLoaded: true };
  }
};

const Reviews = (props) => {
  const [review, dispatchReview] = useReducer(reviewReducer, {
    reviewData: {},
    reviewLoaded: false,
  });

  const params = useParams();

  useEffect(() => {
    getReviewData();
  }, [params.productId]);

  const getReviewData = () => {
    let reviewStatus;
    fetch(
      `https://amazon-product-reviews-keywords.p.rapidapi.com/product/reviews?asin=${params.productId}&page=1&country=US&variants=1&top=0`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "amazon-product-reviews-keywords.p.rapidapi.com",
          "x-rapidapi-key":
            "61f507d9f7mshe5053b75016ecc5p1435f8jsn50b4856f8a32",
        },
      }
    )
      .then((response) => {
        reviewStatus = response.status;
        return response.json();
      })
      .then((reviews) => {
        console.log(reviews);
        if (reviewStatus >= 200 && reviewStatus <= 299) {
          dispatchReview({ type: "SET-REVIEW", reviews: reviews });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  let displayReview;

  if (props.productLoaded === true && review.reviewLoaded === true) {
    console.log(review.reviewData.reviews);
    displayReview = review.reviewData.reviews.map((review) => {
      return (
        <Row className="d-flex flex-column mb-3">
          <div>{review.name}</div>
          <div>{review.title}</div>
          <div>{review.review_data}</div>
          <div>{review.verified_purchase}</div>
          <div>{review.review}</div>
        </Row>
      );
    });
  } else {
    displayReview = <div></div>;
  }

  return (
    <Row className="product-reviews">
      <h5></h5>
      <Col lg={4} className="p-0">
        <h4>Customer Reviews</h4>
        {review.reviewLoaded ? <ReviewStats stats={review.reviewData.stars_stat} reviewLoaded={review.reviewLoaded} /> : <div></div>}
      </Col>
      <Col lg={8}>{displayReview}</Col>
    </Row>
  );
};

export default Reviews;
