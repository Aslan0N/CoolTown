import { useSelector } from "react-redux";
import { BiSearch } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import FirstSec from "../../Components/FirstSec";
import { FaRegCalendarAlt } from "react-icons/fa";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const myBlogs = useSelector((store) => store.BlogsReducer);

  // Search Filter

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(myBlogs);
  }, []);
  const filterSearch = (val) => {
    const result = myBlogs.filter((item) => {
      return item.title.toLowerCase().includes(val);
    });
    setData(result);
  };

  const handleChange = (inputValue) => {
    filterSearch(inputValue);
  };
  // Translate
  const { t } = useTranslation();

  // Category Filter
  const allCategory = [
    "Car Rental",
    "New Cars Model",
    "Hotels",
    "Trips",
    "Others",
  ];
  const filterCat = (value) => {
    let catList = myBlogs.filter((category) => {
      return category.category === value;
    });
    setData(catList);
  };
  // Archives Filter
  const archives = [
    "January 2018",
    "February 2022",
    "March 2022",
    "April 2022",
  ];
  const filterArchive = (value) => {
    let catList = myBlogs.filter((category) => {
      return category.category === value;
    });
    setData(catList);
  };
  // Translation

  return (
    <>
      <FirstSec place={t("header.4")} current={t("header.4")} />
      <section id="blog">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-3 col-lg-3">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="search-box">
                      <h4 className="h4">{t("filter.1")}</h4>
                      <div className="search">
                        <input
                          type="text"
                          onChange={(e) => handleChange(e.target.value)}
                          placeholder={t("filter.1")}
                        />
                        <BiSearch className="i" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="panel-border">
                      <h4 className="h4">{t("filter.2")}</h4>
                      <ul>
                        {allCategory.map((item) => {
                          return (
                            <li onClick={() => filterCat(item)}>
                              <p>{item}</p>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="panel-border">
                      <h4 className="h4">{t("filter.5")}</h4>
                      <ul>
                        {archives.map((item) => {
                          return (
                            <li onClick={() => filterArchive(item)}>
                              <p>{item}</p>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-9 col-lg-9">
              <div className="container">
                <div className="row">
                  {data.map((item) => {
                    return (
                      <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
                        <div className="my-card">
                          <div className="item">
                            <img src={item.image} alt={item.title} />
                          </div>
                          <div className="blog-card-body">
                            <h5>{item.title}</h5>
                            <div className="other">
                              <p className="date">
                                <FaRegCalendarAlt className="i" />
                                {item.date}
                              </p>
                              <p className="admin ms-4">
                                <BiSolidUser className="i" />
                                by {item.admin}
                              </p>
                            </div>
                            <p className="blog-content">{item.content}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
