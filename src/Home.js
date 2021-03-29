import React from "react";
import styled from "styled-components";
import Product from "./Product";

function Home() {
  return (
    <Container>
      <Banner></Banner>
      <Content>
        <Product></Product>
        <Product></Product>
      </Content>
    </Container>
  );
}

export default Home;

const Container = styled.div``;

const Banner = styled.div`
  //   background-image: url("https://i.imgur.com/SYHeuYM.jpg");
  //   background-image: url(./cover.jfif);

  min-height: 600px;
  background-color: #7fbddb;
  background-position: center;
  background-size: cover;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  margin: 0 auto;
`;

const Content = styled.div`
  background: white;
  margin-top: -350px;
  display: flex;
`;
