import React from "react";
import styled from "styled-components";
import { db } from "./firebase";

function Product({ title, price, rating, image, id }) {
  const addToCart = () => {
    const cartItem = db.collection("cartItems").doc(id);
    cartItem.get().then((doc) => {
      console.log(doc);
      if (doc.exists) {
        cartItem.update({
          quantity: doc.data().quantity + 1,
        });
      } else {
        db.collection("cartItems").doc(id).set({
          name: title,
          image: image,
          price: price,
          quantity: 1,
        });
      }
    });
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Price>${price}</Price>
      <Rating>
        {Array(rating)
          .fill()
          .map((rating) => {
            return <p>⭐</p>;
          })}
      </Rating>
      <Image src={image}></Image>
      <ActionSection>
        <AddToCartButton onClick={addToCart}>Add to Cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  background-color: white;
  max-height: 400px;
  //min-height: 400px;
  z-index: 100;
  padding: 0px 10px 0px 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  //box-sizing: border-box;
`;
const Title = styled.span`
  width: 300px;
  //max-height: 100px;
  //overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  // max-height: 64.01px;
`;
const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
`;
const Rating = styled.div`
  display: flex;
`;
const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
  margin-top: 3px;
`;
const AddToCartButton = styled.button`
  margin-top: 10px;
  background-color: #f7d23b;
  border-style: 1px solid black;
  border-radius: 3px;
  width: 100px;
  cursor: pointer;
`;
const ActionSection = styled.div`
  display: grid;
  place-items: center;
`;
