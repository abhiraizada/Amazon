import React from "react";
import styled from "styled-components";
import ipad from "./Ipad.png";

function Product1(props) {
  console.log("inside productone");
  return (
    <Container>
      <Title>Ipad Pro</Title>
      <Price>{props.price}</Price>
      <Rating>⭐⭐⭐⭐⭐</Rating>
      <Image src={ipad}></Image>
      <ActionSection>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
}

export default Product1;

const Container = styled.div`
  background-color: white;
  max-height: 400px;
  z-index: 100;
  padding: 0px 10px 0px 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const Title = styled.span``;
const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
`;
const Rating = styled.div``;
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
`;
const ActionSection = styled.div`
  display: grid;
  place-items: center;
`;
