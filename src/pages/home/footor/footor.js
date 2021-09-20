import { Container, Col, Row, Button } from "react-bootstrap";
import "./footor.scss";

const Footor = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center footor-container"
    >
      <Row className="footor">
        <Col lg={4}>
          <h4>Your One Stop Shop</h4>
          <ul>
            <li>Registration</li>
            <li>Congo Money Back Guarantee</li>
          </ul>
        </Col>
        <Col lg={4}>
          <h4>Make Money with Us</h4>
          <ul>
            <li>Start selling</li>
            <li>How to Sell</li>
            <li>Business sellers</li>
            <li>Affiliaties</li>
          </ul>
        </Col>
        <Col lg={4}>
          <h4>Stay Connected</h4>
          <ul>
            <li>Github</li>
            <li>LinkedIn</li>
          </ul>
        </Col>
      </Row>
      <Row className="copyright">
        <p>Copyright 2021 congo Inc. All Rights Reserved.</p>
      </Row>
    </Container>
  );
};

export default Footor;
