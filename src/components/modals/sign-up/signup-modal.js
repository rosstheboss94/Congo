import { useRef } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/auth-slice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import FirebaseApp from "../../../firebase";
import "./sign-up-modal.scss";

const SignUpModal = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const signingUp = useSelector((state) => state.auth.signingUp);

  const signUpHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.signup({ signingUp: true }));
  };

  const getLoginModal = (e) => {
    e.preventDefault();
    dispatch(authActions.modalState());
  };

  if (signingUp) {
    const auth = getAuth(FirebaseApp);
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .then(() => {
        props.closeModal();
        dispatch(authActions.signup({ signingUp: false }));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
  }

  return (
    <Modal show={props.showModal} onHide={props.closeModal} centered>
      <Modal.Header closeButton className="signup-modal-header">
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="useremail" className="px-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" ref={emailRef} required />
          </Form.Group>
          <Form.Group
            controlId="userpassword"
            className="d-flex flex-column px-3"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
            <Button
              variant="primary"
              type="submit"
              onClick={signUpHandler}
              className="ml-auto mt-3"
            >
              Sign Up
            </Button>
          </Form.Group>

          <Modal.Footer>
            <p>Already a member?</p>
            <Button onClick={getLoginModal}>Login in</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

/*let dsd = (
  <Form>
    <Row className="mb-3">
      <Form.Group as={Col}>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          ref={emailRef}
          required
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Address</Form.Label>
      <Form.Control placeholder="1234 Main St" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Address 2</Form.Label>
      <Form.Control placeholder="Apartment, studio, or floor" />
    </Form.Group>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Choose...</option>
          <option>...</option>
        </Form.Select>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control />
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" id="formGridCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>

    <Button variant="primary" type="submit" onClick={signUpHandler}>
      Sign Up
    </Button>
  </Form>
);

/*         <Form.Group controlId="useremail" className="px-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
          </Form.Group>
          <Form.Group controlId="userpassword" className="d-flex flex-column px-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required />
            <Button variant="primary" type="submit" onClick={signUpHandler} className="ml-auto mt-3">
              Sign Up
            </Button>
          </Form.Group>*/

export default SignUpModal;
