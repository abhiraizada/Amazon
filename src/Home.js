import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
import Product1 from "./Product1";
import Test from "./Test";
import { db } from "./firebase";

function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    db.collection("products").onSnapshot((snapshot) => {
      let tempProducts = [];

      tempProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setProducts(tempProducts);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);
  return (
    <Container>
      <Banner></Banner>
      {/* <Test1>ojsbjbd</Test1> */}
      {/* <Product1 price="777" /> */}
      <Content>
        {products.map((data) => (
          <Product
            title={data.product.name}
            price={data.product.price}
            rating={data.product.rating}
            image={data.product.image}
          />
        ))}
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
  margin-top: -350px;
  display: flex;
`;

const Test1 = styled.div``;
