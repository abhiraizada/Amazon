import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Cart from "./Cart";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { db } from "./firebase";
import Login from "./Login";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState({});

  const getCartItems = () => {
    db.collection("cartItems").onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setCartItems(tempItems);
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header cartItems={cartItems} />
        <Switch>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/cart">
            <Cart cartItems={cartItems} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
