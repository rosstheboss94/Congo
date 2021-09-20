import { useEffect, useState } from "react";
import {
  Card,
  Col,
  Button,
  Dropdown,
  DropdownButton,
  Modal,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import "./cart-modal.scss";

const CartModal = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.cart.cartList);
  const showCart = useSelector((state) => state.cart.showCart);
  const [itemQuantity, setItemQuantity] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  let estimatedTax = subTotal * 0.06;
  let shipping = 0;
  let orderTotal = subTotal + shipping + estimatedTax;
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
      currentSubTotal += item[2] * itemQuantity[shoppingCart.indexOf(item)];
    }
    setSubTotal(currentSubTotal);
  };

  const displayCart = shoppingCart.map((cartItem, itemIdx) => {
    return (
      <Card className="cart-card d-flex flex-row mb-3">
        <Card.Img src={cartItem[0]} />
        <Card.Body className="d-flex flex-column">
          <h3>{cartItem[1]}</h3>
          <Card.Text>
            {`$${cartItem[2].toFixed(2)}`}
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

  const hideCartModal = () => {
    dispatch(cartActions.showCart());
  };

  return (
    <Modal
      contentClassName="cart-modal"
      dialogClassName="cart-modal-container p-0"
      show={showCart}
      onHide={hideCartModal}
    >
      <Modal.Header>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={8} lg={8}>
            {displayCart}
          </Col>
          <Col lg={4} className="order-summary d-flex flex-column">
            <div>
              <h5>ORDER SUMMARY</h5>
            </div>
            <div>
              <p>SUBTOTAL</p>
              <p>{subTotal.toFixed(2)}</p>
            </div>
            <div>
              <p>ESTIMATED TAX</p>
              <p>{estimatedTax.toFixed(2)}</p>
            </div>
            <div>
              <p>SHIPPING</p>
              <p>{shipping.toFixed(2)}</p>
            </div>
            <div className="border-0">
              <p>ORDER TOTAL</p>
              <p>{orderTotal.toFixed(2)}</p>
            </div>
            <div className="d-flex flex-column">
              <Button>CHECKOUT</Button>
              <Button>CONTINUE SHOPPING</Button>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default CartModal;
