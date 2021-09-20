import { Card, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ArtSupplies from "../../../assets/art-supplies.jpg";
import Books from "../../../assets/books.jpg";
import Collectibles from "../../../assets/collectibles.jpg";
import Records from "../../../assets/records.jpg";
import BoysFashion from "../../../assets/boys-fashion.jpg";
import GirlsFashion from "../../../assets/girls-fashion.jpg";
import MensFashion from "../../../assets/mens-fashion.jpg";
import WomensFashion from "../../../assets/womens-fashion.jpg";
import "./featuredcategories.scss";

const FeaturedCategories = () => {
  const featureCatList = [
    ["Arts, Crafts & Sewing", ArtSupplies,"arts-craft"],
    ["CDs & Vinyl", Records,"popular"],
    ["Books", Books,"stripbooks"],
    ["Collectibles & Fine Art", Collectibles,"collectibles"],
  ];

  const clothingCatList = [
    ["Mens", MensFashion,"fashion-mens"],
    ["Boys", BoysFashion,"fashion-boys"],
    ["Women", WomensFashion,"fashion-womens"],
    ["Girls", GirlsFashion,"fashion-girls"],
  ];

  const featureCatDisplay = featureCatList.map((cat) => {
    return (
      <Card className="mr-3 border-0">
        <Card.Body className="feature-card">
          <Card.Img src={cat[1]} />
          <Card.Subtitle className="d-flex justify-content-center text-white">
            <Link to={`category/${cat[2]}`}>{cat[0]}</Link>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    );

  });

  const clothingCatDisplay = clothingCatList.map((cat) => {
    return (
      <Card className="mr-3 border-0">
        <Card.Body className="feature-card">
          <Card.Img src={cat[1]} />
          <Card.Subtitle className="d-flex justify-content-center text-white">
            <Link to={`category/${cat[2]}`}>{cat[0]}</Link>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    );
  });

  return (
    <Container fluid className="d-flex justify-content-center">
    <Row className="d-flex flex-nowrap justify-content-center mt-3 featured-section">
      <Col className="d-flex flex-column align-items-center">
        <h4> Featured Categories</h4>
        <div className="d-flex">{featureCatDisplay}</div>
      </Col>

      <Col className="d-flex flex-column align-items-center">
        <h4> Featured Categories</h4>
        <div className="d-flex">{clothingCatDisplay}</div>
      </Col>
    </Row>
    </Container>
  );
};

export default FeaturedCategories;

/*<Col
md={4}
lg={12}
className=" featured-sec-col d-flex flex-column align-items-center py-3 mr-3"
>
<Row>
  <h4>Featured Categories</h4>
</Row>
<Row>
  {featureCatDisplay}
  {clothingCatDisplay}
</Row>
</Col>
</Row>*/