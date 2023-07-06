import React, { useState } from "react";
import MyData from "../../../Data/ProductsData.json";
import {FaList} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai'
import {GiBeachBag} from 'react-icons/gi'
import {CgMenuGridR} from 'react-icons/cg'
import {BsArrowsMove} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'

const ProductsCard = () => {

    const [rows, setRows] = useState(false)

    const row = () =>{
        setRows(true)
    }
    const col = () =>{
        setRows(false)
    }

  return (
    <>
      <section id="products-card">

        <div className="container-fluid">
          <div className="row">
          <div className="col-12 col-sm-12 col-md-5 col-lg-5 result">
            <p>Showing 1-9 of 256 Results</p>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 menu">
            <div className="icon">
            <button><CgMenuGridR onClick={col} className="i i-big"/></button>
            <button><FaList onClick={row} className="i"/></button>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 select">
            <select name="" id="">
                <option value="Sort1">Sort1</option>
                <option value="Sort1">Sort1</option>
            </select>
          </div>
            {MyData.map((item) => {
              return (
               

                <div className= {rows ? "col-12 col-sm-12 col-md-12 col-lg-12" : "col-12 col-sm-6 col-md-6 col-lg-4"} >
                  <div className="my-card">
                    <h5 className="second-none">${item.price}</h5>
                    <img src={item.image} alt="" />
                    <div className="mycard-body">
                      <h3>{item.title}</h3>
                      <h5 className="first-none">${item.price}</h5>
                      <div className="i-con second-none first-i ">
                        <AiFillStar className="i"/>
                        <AiFillStar className="i"/>
                        <AiFillStar className="i"/>
                        <AiFillStar className="i"/>
                        <AiFillStar className="i"/>
                      </div>
                      <p>{item.description}</p>
                     <div className="btn-con">
                     <button ><GiBeachBag className="i"/></button>
                      <button><AiOutlineHeart className="i"/></button>
                      <button ><BsArrowsMove className="i"/></button>
                     </div>
                    </div>
                    <div className="second-i-con first-none ">
                        <AiFillStar className="i"/>
                        <AiFillStar className="i"/>
                        <AiFillStar className="i"/>
                        <AiFillStar className="i"/>
                        <AiFillStar className="i"/>
                      </div>
                  </div>
                </div>

              )
            })}
          </div>
        </div>
      </section>

    </>
  );
};

export default ProductsCard;



