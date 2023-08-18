import { GlobalContext } from "../Context/GlobalContext";
import { BsArrowDownCircle } from "react-icons/bs";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import { Util } from "../Utils/Util";

const AdminBtn = () => {
  // LogOut
  const logOut = () => {
    localStorage.removeItem("User");
    window.location.reload();
  };
  const check = localStorage.getItem("display");
  console.log(check);
  const Btn = () => {
    const { data } = useContext(GlobalContext);
    if (Util()) {
      return (
        <div className="dropDown">
          <div className="click">
            <span>Hay</span> {data.userName} 
          </div>
          <ul>
            <li onClick={logOut}>Log Out </li>
            <li className={check == 'opn' ? "" : "dash"}>
              <NavLink to={"/dashboard"}>DashBoard</NavLink>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <NavLink to={"/login"} className={"login"}>
          <BiLogIn className="i mx-3" />
        </NavLink>
      );
    }
  };
  return <>{Btn()}</>;
};

export default AdminBtn;
