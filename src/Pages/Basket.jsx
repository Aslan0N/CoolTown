import React from "react";
import { FaTrash } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "react-use-cart";
import Partners from "../Components/Partners";
import CallUs from "./About/Components/CallUs";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Basket = () => {
  const { updateItemQuantity, items, removeItem, totalUniqueItems, setItems } =
    useCart();

    // Translation
    const {t} = useTranslation()

    const location = useNavigate()

    // Check Login
    const checkLogin = () =>{
      if(localStorage.getItem("User")){
        return setItems([])
      }else{
        return location('/login')
      }
    }
  return (
    <>
      <section id="basket">
        <div className="container">
          <h5 style={{ display: items == 0 ? "none" : "block" }}>
            {t("basket.0")} (0{totalUniqueItems})
          </h5>
          <div
            style={{ display: items == 0 ? "block" : "none" }}
            className="con"
          >
            <h3>{t("basket.6")}</h3>
            <button>
              <NavLink to={"/products"}>{t("basket.7")}</NavLink>
            </button>
          </div>
          <div className={items == 0 ? "row none" : "row"}>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="row">
                <div className="col-1 col-sm-1 col-md-2 col-lg-2 cen head start">
                  <p>#</p>
                </div>
                <div className="col-3 col-sm-3 col-md-2 col-lg-2 head start">
                  <p>{t("basket.1")}</p>
                </div>
                <div className="col-2 col-sm-2 col-md-2 col-lg-2 head">
                  <p>{t("basket.2")}</p>
                </div>
                <div className="col-2 col-sm-2 col-md-2 col-lg-2 head end-lg">
                  <p>{t("basket.3")}</p>
                </div>
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 head end">
                  <p>{t("basket.4")}</p>
                </div>
                <div className="col-1 col-sm-1 col-md-1 col-lg-1 head">
                  <span></span>
                </div>
              </div>
            </div>

            {items.map((item) => {
              return (
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-1 content">
                      <p>{item.id}</p>
                    </div>
                    <div className="col-3 content">
                      <img width={100} src={item.image} alt="" />
                    </div>
                    <div className="col-2 content">
                      <p className="pink">${item.price}</p>
                    </div>
                    <div className="col-3 content">
                      <div className="quantity">
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          (+)
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          (-)
                        </button>
                      </div>
                    </div>
                    <div className="col-2 content">
                      <p className="pink">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <div className="col-1 content">
                      <button
                        onClick={() => {
                          removeItem(item.id);
                          toast.error("Removed from cart");
                        }}
                      >
                        <FaTrash className="i" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            style={{ display: items == 0 ? "none" : "block" }}
            className="buy"
            onClick={() => checkLogin()}
          >
            {t("basket.5")} <AiOutlineShoppingCart />
          </button>
        </div>
      </section>
      <CallUs />
      <Partners />
    </>
  );
};

export default Basket;
