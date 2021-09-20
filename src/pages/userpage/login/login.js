import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import SignUpModal from "../../../components/modals/sign-up/signup-modal";
import LoginModal from "../../../components/modals/login/login-modal";

const Login = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const loginModalState = useSelector((state) => state.auth.loginModalState);
  const [showModal, setShowModal] = useState(false);

  const loginHandler = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const modalHandler = () => {
    setShowModal(false);
  };

  
  

  return (
    <Fragment>
      <button onClick={loginHandler}>{currentUser}</button>
      {showModal && !loginModalState && <SignUpModal showModal={showModal} closeModal={modalHandler} />}
      {showModal && loginModalState && <LoginModal showModal={showModal} closeModal={modalHandler} />}
    </Fragment>
  );
};

export default Login;
