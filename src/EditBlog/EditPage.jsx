import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editBlog } from "../Redux/Action";

const EditPage = () => {
  const { id } = useParams();

  const myBlogs = useSelector((store) => store.BlogsReducer);

  const dispatch = useDispatch();

  const location = useNavigate();

  const findBlog = myBlogs.find((item) => item.id === id);

  const [currentBlog, setCurrentBlog] = useState(findBlog);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentBlog({ ...currentBlog, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(editBlog(currentBlog));  
    location("/blog");
  };

  return (
    <>
      <section id="edit">
        <form onSubmit={formSubmit}>
         <div className="input-con mb-3">
            <input
              type="text"
              name="title"
              onChange={handleChange}
              defaultValue={findBlog.title}
              autoComplete="off"
            />
            <label  htmlFor="exampleInputEmail1" className="label">
              Title
            </label>
          </div>
          <div className="input-con mb-3">
            <input
               type="text"
              name="content"
              onChange={handleChange}
              defaultValue={findBlog.content}
              autoComplete="off"
            />
            <label  htmlFor="exampleInputPassword1" className="label">
              Content
            </label>
          </div>
          <div className="input-con mb-3">
            <input
              type="text"
              name="admin"
              onChange={handleChange}
              defaultValue={findBlog.admin}
              autoComplete="off"
            />
            <label  htmlFor="exampleInputPassword1" className="label">
              Admin
            </label>
          </div>
          <div className="input-con mb-3">
            <input
              type="text"
              name="date"
              onChange={handleChange}
              defaultValue={findBlog.date}
              autoComplete="off"
            />
            <label  htmlFor="exampleInputPassword1" className="label">
              Date
            </label>
          </div>
          <div className="input-con mb-3">
            <input
               type="text"
              name="image"
              onChange={handleChange}
              defaultValue={findBlog.image}
              autoComplete="off"
            />
            <label  htmlFor="exampleInputPassword1" className="label">
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

export default EditPage;
