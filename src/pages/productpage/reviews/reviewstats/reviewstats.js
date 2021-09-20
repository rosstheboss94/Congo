import { useEffect, useReducer } from "react";
import { Container, ProgressBar, Row } from "react-bootstrap";
import "./reviewstats.scss";

const statsReducer = (state, action) => {
  if (action.type === "STATS-READY") {
    return {
      reviewStatsReady: true,
      formattedRatingArr: action.formattedStats,
    };
  }
};

const ReviewStats = (props) => {
  const [stats, dispatchStats] = useReducer(statsReducer, {
    reviewStatsReady: false,
    formattedRatingArr: [],
  });
  
  useEffect(() => {
    getAmountOfEachRating();
  }, []);

  let ratingArr = [];
  const getAmountOfEachRating = () => {
    for (let ratingPercentage in props.stats) {
      ratingArr.push(props.stats[ratingPercentage].split(""));
    }

    for (let i = 0; i < ratingArr.length; i++) {
      ratingArr[i].pop();
    }

    ratingArr.reverse();
    dispatchStats({ type: "STATS-READY", formattedStats: ratingArr });
  };

  let displayRating;
  if (stats.reviewStatsReady === true) {
    displayRating = stats.formattedRatingArr.map((rating, idx) => {
      return (
        <Row key={idx} className="review-stats">
          <p>{5 - idx}star</p>
          <ProgressBar now={parseInt(rating.join(""))} />
          <p>{`${rating.join("")}%`}</p>
        </Row>
      );
    });
  }

  return (
    <Container className="d-flex flex-column p-0">
      {stats.reviewStatsReady ? displayRating : <div></div>}
    </Container>
  );
};

export default ReviewStats;
