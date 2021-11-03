import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
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

  const categoriesMoblieLayout = (
    <Navbar className="categories">
      <Nav as="ul" className="justify-content-between align-items-center w-100">
        <Nav.Item as="li">
          <Link to={`/category/${categoryId.Appliances}`}>Appliances</Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to={`/category/${categoryId.Electronics}`}>Electronics</Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to={`/category/${categoryId.Beauty}`}>Beauty</Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Dropdown>
            <Dropdown.Toggle variant="secondary">Other</Dropdown.Toggle>

            <Dropdown.Menu variant="dark" align="start|end" flip>
              <Dropdown.Item><Link to={`/category/${categoryId.Automotive}`}>Automotive</Link></Dropdown.Item>
              <Dropdown.Item><Link to={`/category/${categoryId["Cell Phones & Accessories"]}`}>Cell Phones & Accessories</Link></Dropdown.Item>
              <Dropdown.Item><Link to={`/category/${categoryId["Garden & Outdoor"]}`}>Garden & Outdoor</Link></Dropdown.Item>
              <Dropdown.Item><Link to={`/category/${categoryId["Health, Household & Baby Care"]}`}>Health, Household & Baby Care</Link></Dropdown.Item>
              <Dropdown.Item><Link to={`/category/${categoryId["Home & Kitchen"]}`}>Home & Kitchen</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Item>
      </Nav>
    </Navbar>
  );

  const categoriesDesktopLayout = (
    <Navbar className="categories">
      <Nav as="ul" className="justify-content-between align-items-center w-100">
        {Object.entries(categoryId).map((cat, idx) => {
          return (
            <Nav.Item as="li" key={idx}>
              <Link to={`/category/${cat[1]}`}>{cat[0]}</Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </Navbar>
  );
  
  let displayedLayout;

  if(window.screen.width <= 576){
    displayedLayout = categoriesMoblieLayout;
  }else if(window.screen.width >576){
    displayedLayout = categoriesDesktopLayout;
  }

  return <Container fluid className="p-0 mb-3">
    {displayedLayout}
  </Container>;
}

export default Categories;
