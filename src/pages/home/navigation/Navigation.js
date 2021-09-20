import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "../navigation/Navigation.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import Login from "../../userpage/login/login";
import CartModal from "../../../components/modals/cart/cart-modal";

function Navigation() {
  const cartQuantity = useSelector(state => state.cart.cartQuantity);
  const cartModal = useSelector(state => state.cart.showCart);
  const dispatch = useDispatch();

  const showCartModal = () => {
    dispatch(cartActions.showCart());
  }
  return (
    <React.Fragment>
      {cartModal && <CartModal />}
      <Navbar className="navigation">
        <Navbar.Brand href="#home">Congo</Navbar.Brand>
        <Col lg={8}>
          <Nav className="navigation">
            <Form inline>
              <Form.Control
                className="nav-test"
                type="text"
                placeholder="Search"
              />
              <Button variant="primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Button>
            </Form>
          </Nav>
        </Col>

        <Nav className="ml-auto">
          <Link to="/cart">Cart{cartQuantity}</Link>
          <Nav.Link><Login /></Nav.Link>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
}

export default Navigation;
