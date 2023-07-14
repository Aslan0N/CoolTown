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
      <h4>Add a new blog</h4>
        <form onSubmit={submitForm}>
          <div className="input-con mb-3">
            <input
              type="text"
              required
              onChange={handleChange}
              name="title"
              autoComplete="off"
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
          </div>
          <div className="input-con mb-3">
            <input
              type="text"
              required
              onChange={handleChange}
              name="date"
              autoComplete="off"
            />
            <label htmlFor="exampleInputPassword1" className="form-label">
              Date
            </label>
          </div>
          <div className="input-con mb-3">
            <input
              type="text"
              required
              onChange={handleChange}
              name="admin"
              autoComplete="off"
            />
            <label htmlFor="exampleInputPassword1" className="form-label">
              Admin
            </label>
          </div>
          <div className="input-con mb-3">
            <input
              type="text"
              required
              onChange={handleChange}
              name="content"
              autoComplete="off"
            />
            <label htmlFor="exampleInputPassword1" className="form-label">
              Content
            </label>
          </div>
          <div className="input-con mb-3">
            <input
              type="text"
              required
              onChange={handleChange}
              name="image"
              autoComplete="off"
            />
            <label htmlFor="exampleInputPassword1" className="form-label">
              Image
            </label>
          </div>
          <button type="submit">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default AddBlogs;
