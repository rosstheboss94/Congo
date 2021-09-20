import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Login from "../../userpage/login/login";
import CongoImage from "../../../assets/congo-logo.png";
import "../navigation/Navigation.scss";

const Navigation = () => {
  const cartQuantity = useSelector(state => state.cart.cartQuantity);

  return (
      <Navbar className="navigation">
        <Navbar.Brand>
          <img className="logo" src={CongoImage} alt="Congo logo" />
          <Link to="/">Congo</Link>
        </Navbar.Brand>
        <Col lg={8}>
          <Nav>
            <Form inline>
              <Form.Control
                className="nav-input"
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

        <Nav className="cart-user-container ml-auto">
          <Link to="/cart" className="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"  viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </Link>
          <div className="cart-quantity">
            <p>{cartQuantity}</p>
          </div>
          <div><Nav.Link><Login /></Nav.Link></div>
        </Nav>
      </Navbar>
    
  );
}

export default Navigation;
