import React from "react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { Grid } from "@mui/material";


//function "APP" for the component
const App = () => {
  const [myCart, setMycart] = useState([]); //useState

  // ArrayOfObject for the products
  const data = [
    {
      name: "Fancy Product",
      price: "$40.00",
      hasOffer: false,
      priceStrike: true,
      rating: "3",
    },
    {
      name: "Special Item",
      price: "$20.00 $18.00",
      hasOffer: true,
      priceStrike: true,
      rating: "4",
    },
    {
      name: "Sale Item",
      price: "$50.00 $25.00",
      hasOffer: true,
      priceStrike: true,
      rating: "3",
    },
    {
      name: "Popular Item",
      price: "$40.00",
      hasOffer: false,
      priceStrike: true,
      rating: "5",
    },
    {
      name: "Sale Item",
      price: "$50.00 $25.00",
      hasOffer: true,
      priceStrike: true,
      rating: "3",
    },
    {
      name: "Fancy Product",
      price: "$120.00",
      hasOffer: false,
      priceStrike: true,
      rating: "4",
    },
    {
      name: "Special Item",
      price: "$20.00 $18.00",
      hasOffer: true,
      priceStrike: true,
      rating: "5",
    },
    {
      name: "Popular Item",
      price: "$40.00",
      hasOffer: false,
      priceStrike: true,
      rating: "5",
    },
  ];

  // function to add the cart
  const addToCart = (index) => {
    setMycart((a) => [...a, index]);
  };

  // function to remove the cart
  const removeFromcart = (ind) => {
    const arr = myCart.filter(function (item) {
      return item !== ind;
    });
    setMycart(arr);
  };


  //Sendind the data to the components
  return (
    <div>
      <NavBar myCart={myCart} />
      <Header />
      <Grid container>
        {data.map((item, index) => {
          return (
            <Section
              addToCart={addToCart}
              myCart={myCart}
              removeFromcart={removeFromcart}
              val={item}
              index={index}
              hasOffer={item.hasOffer}
              rating={parseFloat(item.rating)}
            />
          );
        })}
      </Grid>
      <Footer />
    </div>
  );
};

export default App;
