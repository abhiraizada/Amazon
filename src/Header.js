import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import logo from "./logo.svg";

function Header({ cartItems, user, signOut }) {
  const getCount = () => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.product.quantity;
    });

    return count;
  };

  return (
    <div>
      <Container>
        <HeaderLogo>
          <Link to="/home">
            {/* <img src={"https://i.imgur.com/7I9Was5.png"} /> */}
            <img src={logo} />
          </Link>
        </HeaderLogo>

        <HeaderOptionAddress>
          <LocationOnIcon />
          <HeaderOption>
            <OptionLineOne>Hello</OptionLineOne>
            <OptionLineTwo>Select Your Address</OptionLineTwo>
          </HeaderOption>
        </HeaderOptionAddress>
        <HeaderSearch>
          <HeaderSearchInput type="text" />
          <HeaderSearchIconContainer>
            <SearchIcon />
          </HeaderSearchIconContainer>
        </HeaderSearch>

        <HeaderNavItems>
          <HeaderOption onClick={signOut}>
            <OptionLineOne>Hello, {user.name}</OptionLineOne>
            <OptionLineTwo>Accounts & Lists</OptionLineTwo>
          </HeaderOption>
          <HeaderOption>
            <OptionLineOne>Returns</OptionLineOne>
            <OptionLineTwo>& Orders</OptionLineTwo>
          </HeaderOption>

          <HeaderOptionCart>
            <Link to="/cart">
              <ShoppingCartIcon />
              <CartCount>{getCount()}</CartCount>
            </Link>
          </HeaderOptionCart>
        </HeaderNavItems>
      </Container>
    </div>
  );
}

export default Header;

const Container = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;
const HeaderLogo = styled.div`
  img {
    // width: 100px;
    width: 50px;
    margin-left: 11px;
  }
`;

const HeaderOptionAddress = styled.div`
  //   padding: 0px 9px 0px 9px;
  display: flex;
  align-items: center;
`;
const OptionLineOne = styled.div``;
const OptionLineTwo = styled.div`
  font-weight: 700;
`;
const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 5px;
  overflow: hidden;
  margin-left: 9px;
  background-color: white;
  :focus-within {
    box-shadow: 0 0 0 2px #f90;
  }
`;
const HeaderSearchInput = styled.input`
  flex-grow: 1;
  border: 0;
  focus: {
    outline: none;
  }
`;
const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderNavItems = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HeaderOption = styled.div`
  padding: 10px 9px 10px 9px;
  cursor: pointer;
`;
const HeaderOptionCart = styled.div`
  display: flex;

  a {
    padding: 0px 0px 0px 9px;
    display: flex;
    color: white;
    align-items: center;
  }
`;
const CartCount = styled.div`
  padding-left: 4px;
  font-weight: 700;
  color: #f08804;
`;
