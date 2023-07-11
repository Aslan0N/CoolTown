import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addingBlog } from "../Redux/Action";
import { useNavigate } from "react-router-dom";

const AddBlogs = () => {
  const [blog, setBlog] = useState({
    id: uuidv4(),
    title: "",
    date: "",
    admin: "",
    content: "",
    image: "",
  });

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };
  const location = useNavigate();
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addingBlog(blog));
    location("/blog");
  };

  return (
    <>
      <section id="addblogs">
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleChange}
              name="title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Date
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleChange}
              name="date"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Admin
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleChange}
              name="admin"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contemt
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleChange}
              name="content"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Image
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleChange}
              name="image"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default AddBlogs;
