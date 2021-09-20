import { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/auth-slice";
import FirebaseApp from "../../../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import "./login-modal.scss";

const LoginInModal = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const loggingIn = useSelector((state) => state.auth.loggingIn);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login({ loggingIn: true }));
  };

  const getSignUpModal = (e) => {
    e.preventDefault();
    dispatch(authActions.modalState());
  };

  if (loggingIn) {
    const auth = getAuth(FirebaseApp);
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("signing in");
      })
      .then(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            dispatch(authActions.setUser(user.email));
            const uid = user.uid;
          } else {
            // User is signed out
            // ...
          }
        });
      })
      .then(() => {
        dispatch(authActions.login({loggingIn:false}));
        props.closeModal();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <Modal show={props.showModal} onHide={props.closeModal} centered>
      <Modal.Header closeButton className="login-modal-header">
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="useremail" className="px-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
          </Form.Group>
          <Form.Group controlId="userpassword" className="d-flex flex-column px-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required />
            <Button variant="primary" type="submit" className="ml-auto mt-3" onClick={loginHandler}>
              Log in
            </Button>
          </Form.Group>

          <Modal.Footer>
            <p>Not a member?</p>
            <Button onClick={getSignUpModal}>Create a account</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginInModal;
