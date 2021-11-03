import { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { Container } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import StarRating from "../../components/star-rating/star-rating";
import LoadingSpinner from "../../components/spinner/spinner";
import "./categoryhome.scss";

const categoryReducer = (state, action) => {
  if (action.type === "GOTDATA") {
    return { selectedCategory: action.catData, itemsLoaded: true };
  }

  if (action.type === "RESET") {
    return { selectedCategory: [], itemsLoaded: false }
  }
};

const CategoryHome = () => {
  const [categoryData, dispatchCategoryData] = useReducer(categoryReducer, {
    selectedCategory: [],
    itemsLoaded: false
  });

  const params = useParams();

  useEffect(() => {
    getCategoryData();
  }, [params.categoryId]);

  useEffect(() => {
    return dispatchCategoryData({ type: "RESET" })
  }, []);

  const getCategoryData = async () => {
    try {
      let res = await fetch(
        `https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?keyword=${params.categoryId}&country=US&category=aps`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "61f507d9f7mshe5053b75016ecc5p1435f8jsn50b4856f8a32",
            "x-rapidapi-host": "amazon-product-reviews-keywords.p.rapidapi.com",
          },
        }
      )
      let responseStatus = res.status;
      let data = await res.json();
      if (responseStatus >= 200 && responseStatus <= 299) {
        dispatchCategoryData({ type: "GOTDATA", catData: data.products });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const displayItems = categoryData.selectedCategory.map((item) => {
    return (
      <Card className="mb-3 cat-container" key={item.asin}>
        <Card.Body className="d-flex flex-column align-items-center cat-home-card">
          <Card.Title><Link to={`/category/${params.categoryId}/${item.asin}`}>{item.title}</Link></Card.Title>
          <Card.Img variant="top" src={item.thumbnail} />
          <Card.Text as="div" className="d-flex justify-content-center align-items-center w-100"><StarRating productLoaded={categoryData.itemsLoaded} rating={item.reviews.rating} /> {item.reviews.rating}</Card.Text>
          <Card.Text className="d-flex justify-content-center">{`$${item.price.current_price.toFixed(2)}`}</Card.Text>
          <Button variant="primary"><Link to={`/category/${params.categoryId}/${item.asin}`}>More Details</Link></Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <Container fluid className="d-flex flex-wrap justify-content-between w-75">
      {categoryData.itemsLoaded ? displayItems : <div className="spinner-container"><LoadingSpinner /></div>}
    </Container>
  );
};

export default CategoryHome;
