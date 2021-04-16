import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

function CartTotal({ getCount, getTotalPrice }) {
  return (
    <Container>
      <SubTotal>
        SubTotal ({getCount()} items):{" "}
        <NumberFormat
          value={getTotalPrice()}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </SubTotal>
      <CheckOutButton>Proceed To Checkout</CheckOutButton>
    </Container>
  );
}

export default CartTotal;

const Container = styled.div`
  height: 200px;
  background-color: white;
  flex: 0.2;
  padding: 20px;
`;

const SubTotal = styled.h2`
  margin-bottom: 16px;
`;
const CheckOutButton = styled.button`
  background-color: #f0c14b;
  width: 100%;
  // verical - horizontal
  padding: 4px 8px;
  border: 2px solid #a88734;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  :hover {
    background-color: #ddb347;
  }
`;
