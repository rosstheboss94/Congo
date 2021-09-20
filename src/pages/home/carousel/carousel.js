import React from "react";
import { Container } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import  "./carousel.scss";
import TvAd from "../../../assets/tv-ad.jpg";
import Back2School from "../../../assets/back2school.jpg";
import iphoneAd from "../../../assets/iphone-ad.jpg";

function AdCarousel() {
  return (
    <Container fluid className="carousel d-flex justify-content-center">
      <Carousel interval="50000" >
        <Carousel.Item className="position-static">
          <img
            className="d-block w-100"
            src={TvAd}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="position-static">
          <img
            className="d-block w-100"
            src={Back2School}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="position-static">
          <img
            className="d-block w-100"
            src={iphoneAd}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default AdCarousel;
