import Card from "react-bootstrap/Card";
import "./carditem.scss";

const CardItem = (props) => {
  return (
    <Card className="mr-3 card">
      {props.children}
    </Card>
  );
};

export default CardItem;
