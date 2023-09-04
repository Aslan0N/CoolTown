import { toast } from "react-toastify";
import { BsTrash } from "react-icons/bs";
import { useCart } from "react-use-cart";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GiBeachBag } from "react-icons/gi";
import { BsArrowsMove } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { useWishlist } from "react-use-wishlist";
import { GlobalContext } from "../../../Context/GlobalContext";

const List = () => {
  const { removeWishlistItem } = useWishlist();

  const { addItem } = useCart();

  const { myArray } = useContext(GlobalContext);

  // Translation
  const { t } = useTranslation();

  return (
    <>
      <section id="list">
        <h4>{t("wishlist.0")}</h4>
        <div className="container">
          <div className="row">
            {myArray.map((item) => {
              return (
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="my-card">
                    <div className="img">
                      <img src={item.image} alt="" />
                    </div>
                    <h5>{item.title}</h5>
                    <div className="btn-con">
                      <button
                        onClick={() => {
                          addItem(item);
                          toast.success("Added cart");
                        }}
                      >
                        <GiBeachBag className="i" />
                      </button>
                      <button
                        onClick={() => {
                          removeWishlistItem(item.id);
                          toast.error("Removed from wishlist");
                        }}
                      >
                        <BsTrash className="i" />
                      </button>
                      <NavLink to={`/details/${item.id}`}>
                        <button>
                          <BsArrowsMove className="i" />
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default List;
