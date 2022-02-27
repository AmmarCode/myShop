import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rouded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>

      <Card.Body style={{ backgroundColor: "white", color: "black" }}>
        <Link
          to={`/product/${product._id}`}
          style={{ textDecorationLine: "none" }}
        >
          <Card.Title style={{ color: "#375a7f" }}>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div className="my-3" style={{ color:"#375a7f" }}>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={"#f8e825"}
            />
          </div>
        </Card.Text>

        <Card.Text as="h3" style={{ color:"#375a7f" }}>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
