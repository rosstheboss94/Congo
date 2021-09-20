import { Col, Container, Row, Button } from "react-bootstrap";
import SellingPic from "../../../assets/sellingcta.jpg";
import "./sellingcta.scss";

const sellingcta = () => {
  return (
    <Container fluid className="d-flex justify-content-center mt-3 selling-cta-con">
      <Row className="selling-cta">
        <Col className="d-flex flex-column justify-content-between selling-cta-bg py-3" md={4} lg={4}>
          <Row>
            <h1>Want to make some extra cash?</h1>
          </Row>
          <Row>
            <p>Access millions of shoppers and get 24/7 seller protection.</p>
          </Row>
          <Row className="justify-content-center">
            <Button>
              Start selling
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </Button>
          </Row>
        </Col>
        <Col className="p-0" md={8} lg={8}>
          <img src={SellingPic} />
        </Col>
      </Row>
    </Container>
  );
};

export default sellingcta;
