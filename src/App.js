import React from "react";
import AppRouter from "./Router/AppRouter";
import { GlobalProvider } from "./Context/GlobalContext";
import { CartProvider } from "react-use-cart";

const App = () => {
  return (
    <>
      <GlobalProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </GlobalProvider>
    </>
  );
};

export default App;
