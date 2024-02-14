import React from "react";
import { Grid } from "@mui/material";
import { Star } from "@mui/icons-material";


// Function for the section component
const Section = ({
  val,
  addToCart,
  index,
  myCart,
  removeFromcart,
  hasOffer,
  rating,
}) => {
  //function to rate the products using the rating values from the product list
  const renderStarRating = (ratingValue) => {   
    const maxRating = 5;
    const stars = []; 

    //Loop to print the rating for each products
    for (let i = 0; i < maxRating; i++) {
      if (i < ratingValue) {
        stars.push(<Star key={i} style={{ color: "#F57F17" }} />);
      } else {
        stars.push(<Star key={i} style={{ color: "lightgrey" }} />);
      }
    }

    return stars;
  };

  return (
    <Grid item md={3}>
      <div
        style={{
          backgroundColor: "#FFF176",
          padding: "22px",
          margin: "12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "8px",
          position: "relative",
        }}
      >
        {/* displaying the "Special offer" at the top */}
        {hasOffer && (
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              backgroundColor: "#FFB74D",
              color: "black",
              padding: "8px",
              borderRadius: "8px",
              zIndex: 1,
            }}
          >
            Special Offer
          </div>
        )}
        <div>
          <img
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div
          style={{ marginBottom: "5px", fontWeight: "bold", fontSize: "25px" }}
        >
          {val.name}
        </div>
        <span>{renderStarRating(rating)}</span> {/*   printing the rating */}
        <div style={{ marginBottom: "5px" }}>
          <span
            style={{
              textDecoration: hasOffer ? "line-through" : "none",
              marginRight: "5px",
            }}
          >
            {val.price.split(" ")[0]}
          </span>
          {val.price.split(" ")[1]}
        </div>
        {/*   remove and add the cart value using the onClick event */}
        {myCart.includes(index) ? (
          <div
            onClick={() => removeFromcart(index)}
            style={{
              backgroundColor: "#FF5722",
              color: "white",
              padding: "8px",
              margin: "5px",
              borderRadius: "15px",
              cursor: "pointer",
            }}
          >
            Remove from cart
          </div>
        ) : (
          <div
            onClick={() => addToCart(index)} 
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "8px",
              margin: "5px",
              borderRadius: "15px",
              cursor: "pointer",
            }}
          >
            Add to cart
          </div>
        )}
      </div>
    </Grid>
  );
};

export default Section;
