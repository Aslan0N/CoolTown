import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { AiOutlineEdit } from "react-icons/ai";
import { removedBlog } from "../Redux/Action";
import { NavLink } from "react-router-dom";
import { BsTrash3 } from "react-icons/bs";

const Dashboard = () => {
  const dispatch = useDispatch();

  // Store
  const myBlogs = useSelector((store) => store.BlogsReducer);

  // Context
  const { data } = useContext(GlobalContext);

  const [none, setNone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setNone(true);
    }, 1500);
  }, []);

  // Translation
  const { t } = useTranslation();

  return (
    <>
      <section className={none ? "sec-none" : ""} id="admin">
        <h2>
          {t("dashboard.3")} {data.userName}
        </h2>
      </section>
      <section id="dashboard">
        <div className="container">
          <div className={myBlogs == "" ? "row none" : "row 1"}>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="row">
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 head start">
                  <p>{t("dashboard.0")}</p>
                </div>
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 head start">
                  <p>{t("dashboard.1")}</p>
                </div>
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 head con">
                  <p>{t("dashboard.2")}</p>
                </div>
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 head">
                  <span></span>
                </div>
              </div>
            </div>

            {myBlogs.map((item) => {
              return (
                <div className="col-lg-12 ">
                  <div className="row">
                    <div className="col-3 col-sm-3 col-md-2 col-lg-2 content img">
                      <img width={100} src={item.image} alt="" />
                    </div>
                    <div className="col-2 col-sm-3 col-md-3 col-lg-3 content">
                      <p className="p">{item.title}</p>
                    </div>
                    <div className="col-5 col-sm-4 col-md-5 col-lg-5 content center">
                      <p>{item.content}</p>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 content center btn-col">
                      <button>
                        <NavLink to={`/editpage/${item.id}`}>
                          <AiOutlineEdit className="i" />
                        </NavLink>
                      </button>
                      <button
                        className="ms-3"
                        onClick={() => dispatch(removedBlog(item.id))}
                      >
                        <BsTrash3 className="i" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="button">
            <NavLink to={"/addblogs"}>{t("addblog.7")}</NavLink>
          </button>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
