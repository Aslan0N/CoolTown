import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {AiOutlineEdit} from 'react-icons/ai'
import {BsTrash3} from 'react-icons/bs'
import { NavLink } from "react-router-dom";
import { removedBlog } from "../Redux/Action";

const Dashboard = () => {
  const myBlogs = useSelector((store) => store.BlogsReducer);
  useEffect(() => {
    localStorage.setItem("Blogs", JSON.stringify(myBlogs));
  }, [myBlogs]);

  const dispatch = useDispatch()
  return (
    <>
    <NavLink to={'/addblogs'}>Add Blogs</NavLink>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
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
                <th scope="row">1{item.id}</th>
                <td>
                    <img width={120} src={item.image} alt="" />
                </td>
                <td>{item.title}</td>
                <td>{item.content}</td>
                <td>
                <button><AiOutlineEdit/></button>
                <button onClick={()=> dispatch(removedBlog(item.id))}><BsTrash3/></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Dashboard;
