import React from "react";
import { FaTrash } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "react-use-cart";
import Partners from "../Components/Partners";
import CallUs from "./About/Components/CallUs";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

const Basket = () => {
  const { updateItemQuantity, items, removeItem, totalUniqueItems } = useCart();
  return (
    <>
      <section id="basket">
        <div className="container">
          <h5 style={{ display: items == 0 ? "none" : "block" }}>
            Your Cart Products (0{totalUniqueItems})
          </h5>
          <div style={{ display: items == 0 ? "block" : "none" }} className="con">
          <h3>There are no items in the cart</h3>
            <button><NavLink to={'/products'}>Add Now</NavLink></button>
          </div>
          <div className={items == 0 ? "row none" : "row"}>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="row">
                  <div className="col-2 col-sm-2 col-md-2 col-lg-2 head start">
                    <p>İtem</p>
                  </div>
                  <div className="col-2 col-sm-2 col-md-2 col-lg-2 head start">
                    <p>Product</p>
                  </div>
                  <div className="col-2 col-sm-2 col-md-2 col-lg-2 head">
                    <p>Price</p>
                  </div>
                  <div className="col-2 col-sm-2 col-md-2 col-lg-2 head end-lg">
                    <p>Quantitiy</p>
                  </div>
                  <div className="col-3 col-sm-3 col-md-3 col-lg-3 head end">
                    <p>Total Price</p>
                  </div>
                  <div className="col-1 col-sm-1 col-md-1 col-lg-1 head">
                    <span></span>
                  </div>
              </div>
            </div>

            {items.map((item) => {
              return <div className="col-lg-12">
                  <div className="row">
                    <div className="col-1 content"><p>{item.id}</p></div>
                    <div className="col-3 content">
                      <img width={100} src={item.image} alt="" />
                    </div>
                    <div className="col-2 content"><p className="pink">${item.price}</p></div>
                    <div className="col-3 content">
                    <div className="quantity">
                      <button onClick={()=> updateItemQuantity(item.id, item.quantity + 1)}>(+)</button>
                      <span>{item.quantity}</span>
                      <button onClick={()=> updateItemQuantity(item.id, item.quantity - 1)}>(-)</button>
                    </div>
                    </div>
                    <div className="col-2 content"><p className="pink">${(item.price * item.quantity).toFixed(2)}</p></div>
                    <div className="col-1 content"><button onClick={()=> {
                      removeItem(item.id)
                      toast.error("Removed from cart")
                    }}><FaTrash className="i"/></button></div>
                  </div>
              </div>;
            })}
          </div>
          <button style={{ display: items == 0 ? "none" : "block" }} className="buy">Buy Now <AiOutlineShoppingCart/></button>
        </div>
      </section>
      <CallUs />
      <Partners />
    </>
  );
};

export default Basket;
