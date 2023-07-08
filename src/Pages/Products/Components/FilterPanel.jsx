import React, { useState } from "react";
import ProductsCard from "./ProductsCard";
import { BiSearch } from "react-icons/bi";
import MyData from "../../../Data/ProductsData.json";

const FilterPanel = () => {
  const [click, setClick] = useState(false);
  const toggleClick = () => {
    setClick(!click);
  };

  // SearchBox
  const [data, setData] = useState([]);
  const searchProd = (value) => {
    const result = MyData.filter((item) => {
      return item.title.toLowerCase().includes(value);
    });
    setData(result);
  };

  const handleChange = (value) => {
    searchProd(value);
  };

  // Category Filter

  const allCategory = [
    "All",
    "National Ice Cream Month",
    "Baked Alaska",
    "Bambino (ice-cream)",
    "Bob ice cream bar",
    "Creme de papaya",
    "Ice cream barge",
  ];

  const filterCat = (value) => {
    let catList = MyData.filter((category) => {
      return category.category === value;
    });
    setData(catList);
    
  };

  // Filter Price
  const allPrice = [
    "$10 - $20",
    "$20 - $30",
    "$30 - $40",
    "$40 - $50",
    "$50 - $60",
    "$60 - $70",
    "$70 - $80",
  ];

  // Filter Brand

  const allBrand = [
    "Kwality Walls",
    "Arun Ice Creams",
    "Naturals Ice Cream",
    "Boba ice cream bar",
    "Mother Dairy",
    "Top’ N Town",
  ];

  const filterBrand = (brand) =>{
    const brandList = MyData.filter(item => {
      return (
        item.brand == brand
      )
  })
  setData(brandList)
  }

  return (
    <>
      <section id="filter">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-9">
              <ProductsCard data={data} setData={setData} />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 panel">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="search-box">
                  <h4 className="h4">Search</h4>
                  <div className="search">
                    <input
                      type="text"
                      onChange={(e) => handleChange(e.target.value)}
                      placeholder="Search"
                    />
                    <BiSearch className="i" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="panel-border">
                  <h4 className="h4">Categories</h4>
                  <ul>
                    {allCategory.map((item) => {
                      return (
                        <li onClick={() => filterCat(item)}>
                        <label>
                        <input type="radio" name="category" id="" />
                          {" "}
                          <span
                            onClick={toggleClick}
                            className="span"
                            type="button"
                          ></span>{" "}
                          <p>{item}</p>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="panel-border">
                  <h4 className="h4">Price</h4>
                  <ul>
                    {allPrice.map((item) => {
                      return (
                        <li>
                          {" "}
                          <label>
                          <input type="radio" name="price" id="" />
                          <span className="span"></span> <p>{item}</p>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="panel-border">
                  <h4 className="h4">Brand</h4>
                  <ul>
                    {
                      allBrand.map(brand=>{
                        return (
                          <li onClick={()=> filterBrand(brand)} >
                          <label>
                          <input type="radio" name="brand" id="" />
                      <span className="span"></span> <p>{brand}</p>
                          </label>
                      {" "}
                    </li>
                        )
                      })
                    }
                   </ul>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="img-card">
                  <img
                    src="https://webstrot.com/html/cooltown/html/images/add1.jpg"
                    alt=""
                  />
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
