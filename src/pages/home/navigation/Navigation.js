import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Login from "../../userpage/login/login";
import CongoImage from "../../../assets/congo-logo.png";
import "../navigation/Navigation.scss";

const Navigation = () => {
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);

  return (
    <Navbar className="navigation" expand="md">
      <Col xs={3} className="pl-0">
        <Navbar.Brand>
          {window.screen.width <= 575 ? (
            <Link to="/">Congo</Link>
          ) : (
            <span>
              <img className="logo" src={CongoImage} alt="Congo logo" />
              <Link to="/">Congo</Link>
            </span>
          )}
        </Navbar.Brand>
      </Col>

      {/*<Col xs={3} className="cart border border-danger">
        <Link to="/cart" className="d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="red"
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
        </Link>
        <p>{cartQuantity}</p>
      </Col>*/}

      <Col
        xs={6}
        lg={8}
        className="toggler d-flex flex-column align-items-end pr-0"
      >
        <Navbar.Toggle
          className="d-flex justify-content-center align-items-center"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse>
          <Nav className="align-items-start">
            <Nav.Item>
              <Form className="search-form">
                <Form.Group>
                  <Form.Control as="input" type="text" placeholder="Search" />
                  <Button type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                  </Button>
                </Form.Group>
              </Form>
            </Nav.Item>

            <Nav.Item>
              <Login />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Col>
    </Navbar>
  );
};

export default Navigation;
