import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { removedBlog } from "../Redux/Action";

const Dashboard = () => {
  const myBlogs = useSelector((store) => store.BlogsReducer);
  useEffect(() => {
    localStorage.setItem("Blogs", JSON.stringify(myBlogs));
  }, [myBlogs]);

  const dispatch = useDispatch();
  return (
    <>
      {/* <section id="dashboard">
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Content</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {myBlogs.map((item) => {
              return (
                <tr>
                  <th scope="row">
                    <img width={70} src={item.image} alt="" />
                  </th>
                  <td>{item.title}</td>
                  <td>{item.content}</td>
                  <td>
                    <button>
                      <AiOutlineEdit className="i" />
                    </button>
                    <button className="ms-3" onClick={() => dispatch(removedBlog(item.id))}>
                      <BsTrash3 className="i" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button><NavLink to={"/addblogs"}>Add Blogs</NavLink></button>
      </div>
        

      </section> */}
      <section id="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="row">
                  <div className="col-3 col-sm-3 col-md-3 col-lg-3 head start">
                    <p>Image</p>
                  </div>
                  <div className="col-3 col-sm-3 col-md-3 col-lg-3 head start">
                    <p>Title</p>
                  </div>
                  <div className="col-3 col-sm-3 col-md-3 col-lg-3 head con">
                    <p>Content</p>
                  </div>
                  <div className="col-3 col-sm-3 col-md-3 col-lg-3 head">
                    <span></span>
                  </div>
              </div>
            </div>

            {myBlogs.map((item) => {
              return <div className="col-lg-12 ">
                  <div className="row">
                    <div className="col-3 col-sm-3 col-md-2 col-lg-2 content img">
                      <img width={100} src={item.image} alt="" />
                    </div>
                    <div className="col-2 col-sm-3 col-md-3 col-lg-3 content"><p className="p">{item.title}</p></div>
                    <div className="col-5 col-sm-4 col-md-5 col-lg-5 content center"><p>{item.content}</p></div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 content center btn-col"><button>
                      <AiOutlineEdit className="i" />
                    </button>
                    <button className="ms-3" onClick={() => dispatch(removedBlog(item.id))}>
                      <BsTrash3 className="i" />
                    </button></div>
                  </div>
              </div>;
            })}
          </div>
        <button className="button"><NavLink to={"/addblogs"}>Add Blogs</NavLink></button>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
