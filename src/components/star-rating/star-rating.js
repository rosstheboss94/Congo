import { Row } from "react-bootstrap";
import "./star-rating.scss";

const StarRating = (props) => {
  const star = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-star-fill"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );
  const halfStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-star-half"
      viewBox="0 0 16 16"
    >
      <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
    </svg>
  );

  const emptyStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="empty-star bi bi-star-fill"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );

  
  const ratingsMax = [];
  for (let i = 0; i < 5; i++) {
    ratingsMax.push(star);
  }

  const currentRatings = `${
    props.productLoaded ? props.rating : ""
  }`;

  const displayRatings = [];

  if (props.productLoaded === true) {
    for (let i = 0; i < currentRatings[0]; i++) {
      displayRatings.push(star);
      console.log(displayRatings);
    }
    
    if (currentRatings[2] >= 7) {
      displayRatings.push(star);
    } else if (currentRatings[2] >= 4 && currentRatings[2] <= 6) {
      displayRatings.push(halfStar);
    }

    if(displayRatings.length < 5){
      for(let i = 0; i <= 5 - displayRatings.length; i++){
        displayRatings.push(emptyStar);
      }
    }
  }

  return (
    <Row className="product-title">
      <h4>{props.title}</h4>
      <p>
        <div className="product-review">
          <div className="star-outter">{ratingsMax.map((star) => star)}</div>
          <div className="star-inner">{displayRatings.map((star) => star)}</div>
        </div>
        reviews
      </p>
    </Row>
  );
};

export default StarRating;