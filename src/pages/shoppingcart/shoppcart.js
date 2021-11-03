import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";
import {
  Container,
  Card,
  Col,
  Row,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import Checkout from "../../components/checkout/checkout";
import "./shoppingcart.scss";


const ShoppingCart = () => {
  const shoppingCart = useSelector((state) => state.cart.cartList);
  const [itemQuantity, setItemQuantity] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  let estimatedTax = subTotal * .06;
  let orderTotal = subTotal + estimatedTax;
  let shipping = 0;
  let itemQuantityArr = [];
  let maxQuantity = [1, 2, 3, 4, 5];
  
  useEffect(() => {
    for (let item of shoppingCart) {
      itemQuantityArr.push(1);
    }
    setItemQuantity(itemQuantityArr);
  }, [shoppingCart]);

  useEffect(() => {
    if (itemQuantity.length === shoppingCart.length) {
      getSubTotal();
    }
  }, [itemQuantity]);

  const displayQuantity = (quantity, itemIdx) => {
    setItemQuantity((prevState) => {
      let nextState = [...prevState];
      nextState[itemIdx] = quantity;
      return nextState;
    });
  };

  const getSubTotal = () => {
    let currentSubTotal = 0;
    for (let item of shoppingCart) {
      currentSubTotal += item.productPrice * itemQuantity[shoppingCart.indexOf(item)];
    }
    setSubTotal(currentSubTotal);
  };
  
 

  const displayCart = shoppingCart.map((cartItem, itemIdx) => {
    return (
      <Card className="cart-card d-flex flex-row">
        <Card.Img className="product-img" src={cartItem.productImg} />
        <Card.Body className="d-flex flex-column">
          <h5>{cartItem.productName}</h5>
          <Card.Text>
            {`$${cartItem.productPrice.toFixed(2)}`}
            <DropdownButton title={itemQuantity ? itemQuantity[itemIdx] : 1}>
              {maxQuantity.map((quantity) => {
                return (
                  <Dropdown.Item
                    onClick={() => {
                      displayQuantity(quantity, itemIdx);
                    }}
                  >
                    {quantity}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  });

  return (
    <Container fluid>
      <Row>
        <Col>
          {displayCart}
        </Col>
        <Col lg={3} className="order-summary d-flex flex-column">
          <div>
            <h5>ORDER SUMMARY</h5>
          </div>
          <div className="d-flex justify-content-between">
            <p>SUBTOTAL</p>
            <p>{subTotal.toFixed(2)}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>ESTIMATED TAX</p>
            <p>{estimatedTax.toFixed(2)}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>SHIPPING</p>
            <p>{shipping.toFixed(2)}</p>
          </div>
          <div className="d-flex justify-content-between border-0">
            <p>ORDER TOTAL</p>
            <p>{orderTotal.toFixed(2)}</p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <Checkout 
            amount={orderTotal} 
            />
            <Button>CONTINUE SHOPPING</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ShoppingCart;
