import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";
import GalleryPage from "../Pages/Gallery/GalleryPage";
import Products from "../Pages/Products/Products";
import WishList from "../Pages/WishList/WishList";
import PrivateRoute from "../Routes/PrivateRoute";
import { ToastContainer } from "react-toastify";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/Dashboard";
import React, { useContext } from "react";
import About from "../Pages/About/About";
import AddBlogs from "../Pages/AddBlogs";
import Home from "../Pages/Home/Home";
import Header from "../Common/Header";
import Blog from "../Pages/Blog/Blog";
import Footer from "../Common/Footer";
import Basket from "../Pages/Basket";
import Login from "../Pages/Login";
import Admin from "../Pages/Admin";
import DetailsPage from "../DetailsPage";

const AppRouter = () => {
  const { darkMode } = useContext(GlobalContext);

  return (
    <>
      <main className={darkMode ? "dark" : "light"}>
        <BrowserRouter>
          <Header />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/admin" element={<Admin />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addblogs" element={<AddBlogs />} />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
    </>
  );
};

export default AppRouter;
