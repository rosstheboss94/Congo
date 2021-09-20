import { Fragment } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import "./addtocart.scss";

const AddToCart = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addProductToCart({
      productImg: props.productImg,
      productPrice: props.productPrice,
      productName: props.productName,
    }));
  };

  return (
    <Fragment>
      <Row className="product-buy">
        <Col className="product-price">
          <p>{`Price: $${props.productPrice}`}</p>
        </Col>
        <Col className="product-buttons">
          <div>
            <Button onClick={addToCartHandler}>Add to Cart</Button>
          </div>
          <div>
            <Button>Buy it Now</Button>
          </div>
        </Col>
      </Row>
      <Row className="product-shipping">
        <div>shipping</div>
      </Row>
    </Fragment>
  );
};

export default AddToCart;
