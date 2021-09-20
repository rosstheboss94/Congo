import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./categoriesbar.scss";


function Categories() {
  
  const categoryId = {
    Appliances: "appliances",
    Automotive: "automotive",
    Electronics: "electronics",
    Beauty: "beauty",
    "Cell Phones & Accessories": "mobile",
    "Garden & Outdoor": "lawngarden",
    "Health, Household & Baby Care": "hpc",
    "Home & Kitchen": "garden",
  };

 
  return (
    <Container fluid className="p-0 mb-3">
      <Navbar className="categories">
        <Nav as="ul" className="justify-content-between align-items-center w-100">
          <Nav.Item as="li">
            <Link to="/">Home</Link>
          </Nav.Item>
          {Object.entries(categoryId).map((cat, idx) => {
            return (
              <Nav.Item as="li" key={idx}>
                <Link to={`/category/${cat[1]}`}>{cat[0]}</Link>
              </Nav.Item>
            );
          })}
        </Nav>
      </Navbar>
    </Container>
  );
}

export default Categories;
