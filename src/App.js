import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Cart from "./Cart";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { db, auth } from "./firebase";
import Login from "./Login";
import styled from "styled-components";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const getCartItems = () => {
    db.collection("cartItems").onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setCartItems(tempItems);
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      //localStorage.removeItem("user");
      setUser(null);
      console.log("signout user state, ", user);
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  console.log("user : ", user);
  return (
    <Router>
      {console.log("hnji")}
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <Container>
          <Header signOut={signOut} user={user} cartItems={cartItems} />
          <Switch>
            {/* <Route path="/login">
              <Login setUser={setUser} />
            </Route> */}
            <Route path="/cart">
              <Cart cartItems={cartItems} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      )}
    </Router>
  );
}

export default App;

const Container = styled.div``;
