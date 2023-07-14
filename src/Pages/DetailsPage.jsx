import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";
import {AiFillStar} from 'react-icons/ai'

const DetailsPage = () => {
  const { id } = useParams();
  const { myData } = useContext(GlobalContext);
  const result = myData.find((item) => item.id.toString() === id);
  return (
    <>
      <section id="detail-page">
        {!result ? (
          "Wait"
        ) : (
          <div className="my-card">
            <div className="content">
              <h3>{result.title.toUpperCase()}</h3>
              <h6>{result.category}</h6>
              <p>{result.description}</p>
              <NavLink to={'/products'}>
              <button>Add To Cart</button>
              </NavLink>
            </div>
            <div className="img">
            <div className="i-con">
              <AiFillStar className="i"/>
              <AiFillStar className="i"/>
              <AiFillStar className="i"/>
              <AiFillStar className="i"/>
              <AiFillStar className="i"/>
            </div>
            <img src={result.image} alt="" />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default DetailsPage;
