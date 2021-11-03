import React from "react";
import { Switch, Route } from "react-router";
import Navigation from "./pages/home/navigation/Navigation";
import Categories from "./pages/home/categoriesbar/categoriesbar";
import AdCarousel from "./pages/home/carousel/carousel";
import CategoryHome from "./pages/categoryhome/categoryhome";
import "./App.scss";
import FeaturedCategories from "./pages/home/featuredcategories/featuredcategories";
import SellingCTA from "./pages/home/sellingcta/sellingcta";
import ProductPage from "./pages/productpage/productpage";
import Footor from "./pages/home/footor/footor";
import ShoppingCart from "./pages/shoppingcart/shoppcart";
import ProductDisplay from "./components/checkout/checkout";


function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Navigation />
        <Categories />
        <AdCarousel />
        <FeaturedCategories />
        {/*<SellingCTA />
        <Footor />*/}
      </Route>
      <Route path="/cart" exact>
        <Navigation />
        <Categories />
        <ShoppingCart />
      </Route>
      <Route path="/checkout" exact>
        <ProductDisplay />
      </Route>
      <Route path="/category/:categoryId" exact>
        <Navigation />
        <Categories />
        <CategoryHome />
      </Route>
      <Route path="/category/:categoryId/:productId" exact>
        <Navigation />
        <Categories />
        <ProductPage />
      </Route>
    </Switch>
  );
}

export default App;
