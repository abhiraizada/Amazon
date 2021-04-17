import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
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
      <Content>
        {products.map((data) => (
          <Product
            title={data.product.name}
            price={data.product.price}
            rating={data.product.rating}
            image={data.product.image}
            id={data.id}
          />
        ))}
      </Content>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  //display: flex;
`;

const Banner = styled.div`
  //   background-image: url("https://i.imgur.com/SYHeuYM.jpg");
  //   background-image: url(./cover.jfif);
  background-image: url("https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg");
  min-height: 600px;
  //background-color: #7fbddb;
  background-position: center;
  background-size: cover;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  margin: 0 auto;
`;

const Content = styled.div`
  margin-top: -350px;
  display: flex;
  flex-wrap: wrap;
`;

const Test1 = styled.div``;
