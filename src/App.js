import "./App.css";
import Form from "./components/Form/Form.js";
import Header from "./components/Header/Header";
import { Cart } from "./components/Cart/Cart";
import { useState } from "react";
import { CartProvider } from "./store/CartProvider";
import List from "./components/List/List";
import { FormProvider } from "./store/FormProvider";

function App() {
  const [showCart, setShowCart] = useState(false);
  const hideCart = () => {
    setShowCart(false);
  };
  const showCartHandler = () => {
    setShowCart(true);
  };

  return (
    <CartProvider>
      <FormProvider>
        <div className="App">
          {showCart && <Cart hideCartHandler={hideCart} />}
          <Header showCartHandler={showCartHandler} />
          <Form />
          <div>
            <List />
          </div>
        </div>
      </FormProvider>
    </CartProvider>
  );
}

export default App;
