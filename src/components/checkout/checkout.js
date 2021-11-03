import React, { useState, useEffect } from "react";
import "./checkout.scss";

const ProductDisplay = () => {
  const sendShoppingCart = async (event) => {
    event.preventDefault();
    console.log("checkout");
   try {
      const response = await fetch("/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            {name: "book", quantity: 2, amount: 10000},
            {name: "carpet", quantity: 1, amount: 20000}
          ]
        }),
      });
      let url;
      if (response.ok) {
        url = await response.json();
        window.location = url.url;
      }else{
        throw Error;
      }
    } catch (err) {
      console.log("bob");
    }
  };

  return (
    <section className="checkout">
      <div className="product">
        <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
        />
        <div className="description">
          <h3>Stubborn Attachments</h3>
          <h5>$20.00</h5>
        </div>
      </div>
      <form>
        <button onClick={sendShoppingCart}>Checkout</button>
      </form>
    </section>
  );
};



export default ProductDisplay;

