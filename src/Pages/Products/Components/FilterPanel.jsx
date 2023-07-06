import React, { useState } from "react";
import ProductsCard from "./ProductsCard";
import { BiSearch } from "react-icons/bi";

const FilterPanel = () => {
    const [click, setClick] = useState(false)
    const toggleClick = () =>{
        setClick(!click)
    }



  return (
    <>
      <section id="filter">
        <div className="container-fluid">
          <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-9">
            <ProductsCard />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 panel">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="search-box">
                <h4 className="h4">Search</h4>
                <div className="search">
                  <input type="text" placeholder="Search" />
                  <BiSearch className="i" />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="panel-border">
            <h4 className="h4">Categories</h4>
            <ul>
                <li> <span onClick={toggleClick} className={click ? "colored" : ''} ></span> <p>National Ice Cream Month</p></li>
                <li> <span onClick={toggleClick} className={click ? "colored" : ''} ></span> <p>Baked Alaska</p></li>
                <li> <span onClick={toggleClick} className={click ? "colored" : ''} ></span> <p>Bambino (ice-cream)</p></li>
                <li> <span onClick={toggleClick} className={click ? "colored" : ''} ></span> <p>Bob ice cream bar</p></li>
                <li> <span onClick={toggleClick} className={click ? "colored" : ''} ></span> <p>Creme de papaya</p></li>
                <li> <span onClick={toggleClick} className={click ? "colored" : ''} ></span> <p>Ice cream barge</p></li>
            </ul>
            </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="panel-border">
            <h4 className="h4">Price</h4>
            <ul>
                <li> <span onClick={toggleClick} className={click ? "colored" : ''} ></span> <p>$100 - $200</p></li>
                <li> <span onClick={toggleClick} className={click ? "colored" : ''} ></span> <p>$200 - $300</p></li>
                <li> <span onClick={toggleClick} className={click ? "colored" : ''} ></span> <p>$300 - $400</p></li>
                <li> <span onClick={toggleClick} className={click ? "colored" : ''} ></span> <p>$400 - $500</p></li>
                <li> <span onClick={toggleClick} className={click ? "colored" : ''} ></span> <p>$500 - $600</p></li>
                <li> <span onClick={toggleClick} className={click ? "colored" : ''} ></span> <p>$600 - $700</p></li>
                <li> <span onClick={toggleClick} className={click ? "colored" : ''} ></span> <p>$700 - $800</p></li>
            </ul>
            </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="panel-border">
            <h4 className="h4">Brand</h4>
            <ul>
                <li> <span onClick={toggleClick} className={click ? "colored" : ''} ></span> <p>Kwality Walls</p></li>
                <li> <span onClick={toggleClick} className={click ? "colored" : ''} ></span> <p>Arun Ice Creams</p></li>
                <li> <span onClick={toggleClick} className={click ? "colored" : ''} ></span> <p>Naturals Ice Cream</p></li>
                <li> <span onClick={toggleClick} className={click ? "colored" : ''} ></span> <p>Boba ice cream bar</p></li>
                <li> <span onClick={toggleClick} className={click ? "colored" : ''} ></span> <p>Mother Dairy</p></li>
                <li> <span onClick={toggleClick} className={click ? "colored" : ''} ></span> <p>Top’ N Town</p></li>
            </ul>
            </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="img-card">
                <img src="https://webstrot.com/html/cooltown/html/images/add1.jpg" alt="" />
                </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FilterPanel;
