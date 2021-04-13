import React from "react";
import styled from "styled-components";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";

function Cart({ cartItems }) {
  return (
    <Container>
      <CartItems cartItems={cartItems}></CartItems>
      <CartTotal></CartTotal>
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  display: flex;
  //TRouble
  margin: 14px 18px 0px 18px;
`;
