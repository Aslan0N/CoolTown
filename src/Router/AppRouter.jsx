import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";
import GalleryPage from "../Pages/Gallery/GalleryPage";
import LoadingImg from "../assets/images/loader.gif";
import WishList from "../Pages/WishList/WishList";
import Products from "../Pages/Products/Products";
import PrivateRoute from "../Routes/PrivateRoute";
import { ToastContainer } from "react-toastify";
import Contact from "../Pages/Contact/Contact";
import DetailsPage from "../Pages/DetailsPage";
import EditPage from "../EditBlog/EditPage";
import Dashboard from "../Pages/Dashboard";
import React, { useContext } from "react";
import About from "../Pages/About/About";
import AddBlogs from "../Pages/AddBlogs";
import Home from "../Pages/Home/Home";
import Header from "../Common/Header";
import Blog from "../Pages/Blog/Blog";
import Footer from "../Common/Footer";
import Login from "../Register/Login";
import Basket from "../Pages/Basket";
import { useEffect } from "react";
import { useState } from "react";

const AppRouter = () => {
  // Change Mood
  const { darkMode } = useContext(GlobalContext);

  // Loading Page

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 2500);
  }, []);
  



  return (
    <>
      <section id="loading" style={{ display: loading ? "none" : "flex" }}>
        <img src={LoadingImg} alt="" />
      </section>
      <main
        className={darkMode ? "dark" : "light"}
        style={{ display: !loading ? "none" : "block" }}
      >
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
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/addblogs" element={<AddBlogs />} />
            <Route path="/details/:id" element={<DetailsPage />} />
            <Route path="/editpage/:id" element={<EditPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
    </>
  );
};

export default AppRouter;
