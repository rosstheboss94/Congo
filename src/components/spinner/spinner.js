import { Spinner } from "react-bootstrap";
import "./spinner.scss";

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <Spinner className="spinner" animation="border" variant="info" />
    </div>
  );
};

export default LoadingSpinner;
