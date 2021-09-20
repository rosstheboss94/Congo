import { Fragment } from "react";
import { Row } from "react-bootstrap";
import "./features.scss";

const Features = (props) => {
    let productInfo;
    if (props.productLoaded === true) {
        productInfo = props.features.map((info) => {
          return <li>{info}</li>;
        });
    }

  return (
    <Fragment>
      <Row className="product-description">
        <h4>Product Description</h4>
        <div>{props.description}</div>
      </Row>

      <Row className="product-information">
        <h4>Product Information</h4>
        <div>
          <ul>{props.productLoaded ? productInfo : <li>loading</li>}</ul>
        </div>
      </Row>
    </Fragment>
  );
};

export default Features;
