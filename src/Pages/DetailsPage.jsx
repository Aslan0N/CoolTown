import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";
import { AiFillStar } from "react-icons/ai";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";

const DetailsPage = () => {
  const { id } = useParams();
  // Context
  const { myData } = useContext(GlobalContext);
  const result = myData.find((item) => item.id.toString() === id);
  // Cart
  const { addItem } = useCart();
  return (
    <>
      <section id="detail-page">
        {!result ? (
          "Wait"
        ) : (
          <div className="my-card">
            <div className="content">
              <h3>{result.title.toUpperCase()}</h3>
              <div className="i-con">
                <div className="star">
                <AiFillStar className="i" />
                <AiFillStar className="i" />
                <AiFillStar className="i" />
                <AiFillStar className="i" />
                <AiFillStar className="i" />
                </div>
              <hp>{result.brand}</hp>
              </div>
              <h6>{result.category}</h6>
                <p>${result.price}</p>
              <p>{result.description}</p>

              <button onClick={() => {
                addItem(result)
                toast.success("Add basket")
              }}>Add To Cart</button>
                        <button onClick={()=>{window.history.back()}}>back</button>

            </div>
            <div className="img">
              <img src={result.image} alt="" />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default DetailsPage;
