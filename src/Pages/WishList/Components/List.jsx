import React from "react";
import { useWishlist } from "react-use-wishlist";
import { BsArrowsMove } from "react-icons/bs";
import { GiBeachBag } from "react-icons/gi";
import { useCart } from "react-use-cart";
import { BsTrash } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const List = () => {
  const { items, removeWishlistItem } = useWishlist();
  const myArray = [...new Map(items.map((item) => [item.id, item])).values()];
  const { addItem } = useCart();

  // Translation
  const {t} = useTranslation()

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
                      <button onClick={() => addItem(item)}>
                        <GiBeachBag className="i" />
                      </button>
                      <button onClick={() => removeWishlistItem(item.id)}>
                        <BsTrash className="i" />
                      </button>
                      <button>
                        <BsArrowsMove className="i" />
                      </button>
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
