import React from "react";
import StarRating from "../../components/star-rating/star-rating";
import Features from "./features/features";
import AddToCart from "./addtocart/addtocart";
import Reviews from "./reviews/reviews";
import { useEffect, useReducer } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import "./productpage.scss";

const productReducer = (state, action) => {
  if (action.type === "PRODUCT-DATA-RECEIVED") {
    console.log(action.productData);
    return {
      productData: action.productData,
      productLoaded: state.productLoaded,
    };
  }

  if (action.type === "LOAD-PRODUCT") {
    return { productData: state.productData, productLoaded: true };
  }

  if (action.type === "NEW-PRODUCT") {
    return { productData: {}, productLoaded: false };
  }
};

const ProductPage = () => {
  const [product, dispatchProduct] = useReducer(productReducer, {
    productData: {},
    productLoaded: false,
  });

  const params = useParams();

  useEffect(() => {
    getProductData();
  }, [params.productId]);

  useEffect(() => {
    return dispatchProduct({ type: "NEW-PRODUCT" });
  }, []);

  const getProductData = async () => {
    try {
      let response = await fetch(
        `https://amazon-product-reviews-keywords.p.rapidapi.com/product/details?asin=${params.productId}&country=US`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "61f507d9f7mshe5053b75016ecc5p1435f8jsn50b4856f8a32",
            "x-rapidapi-host": "amazon-product-reviews-keywords.p.rapidapi.com",
          },
        }
      )
      let product = await response.json();
      if (response.status >= 200 && response.status <= 299) {
        dispatchProduct({ type: "PRODUCT-DATA-RECEIVED", productData: product.product });
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (
    Object.keys(product.productData).length > 0 &&
    product.productLoaded === false
  ) {
    dispatchProduct({ type: "LOAD-PRODUCT" });
  }

  const displayProduct = (
    <React.Fragment>
      <Row>
        <Col lg={6} className="product-images">
          <img src={product.productData.main_image} />
        </Col>
        <Col>
          <Row>{product.productLoaded && <h3>{product.productData.title}</h3>}</Row>
          <Row className="d-flex justify-content-end">
            {product.productLoaded && <StarRating
              productLoaded={product.productLoaded}
              title={product.productData.title}
              rating={product.productData.reviews.rating}
            />}
          </Row>
        </Col>

        <AddToCart
            productLoaded={product.productLoaded}
            productPrice={
              product.productLoaded
                ? product.productData.price.current_price
                : 0
            }
            productImg={product.productData.main_image}
            productName={product.productData.title}
          />

      </Row>
      <Features
        productLoaded={product.productLoaded}
        features={product.productData.feature_bullets}
        description={product.productData.description}
      />
      <Reviews productLoaded={product.productLoaded} />
    </React.Fragment>
  );

  return (
    <Container className="productpage">
      {product.productLoaded ? displayProduct : <h1>Loading</h1>}
    </Container>
  );
};

export default ProductPage;
