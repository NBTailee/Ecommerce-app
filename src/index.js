import React from "react";
import ReactDOM from "react-dom";
import { App, Product } from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import SingleProduct from "./pages/SingleProduct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
const root = document.getElementById("root");

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<Cart />} />
            <Route path="products" element={<Product />}>
              <Route index element={<ProductList />} />
              <Route path=":productId" element={<SingleProduct />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
  root
);
