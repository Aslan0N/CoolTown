import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { GlobalContext } from "../Context/GlobalContext";

const MiniLogin = () => {
  const [up, setUp] = useState(false);
  const toggleUp = () => {
    setUp(!up);
  };

  const { user, setUser } = useContext(GlobalContext);

  const location = useNavigate();
  // Login
  const submitForm = (e) => {
    e.preventDefault();
    if (
      user.userName === name.current.value &&
      user.password === pass.current.value &&
      user.userName &&
      user.password !== ""
    ) {
      localStorage.setItem("User", JSON.stringify(user));
      location("/products");
      window.location.reload();
    } else if (name.current.value === "" || pass.current.value === "") {
      alert("Enter username and password");
    } else {
      alert("The username or password is incorrect");
    }
  };

  const name = useRef();
  const pass = useRef();

  // SignUp
  const checkForm = (e) => {
    e.preventDefault();
    if (firstName && userPass !== "") {
      return setUser({
        userName: firstName.current.value,
        password: userPass.current.value,
      });
    }
  };

  const firstName = useRef();

  const userPass = useRef();
  return (
    <>
      <section id="mini-login">
        <div className="con" onClick={toggleUp}>
          <div className="small-dash"></div>
          <div
            className={up ? "dash add-animation" : "dash close-animation"}
          ></div>
          <div className="dot"></div>
        </div>
        <div className={!up ? "signin-card up" : "signin-card"}>
          <div className="sign-in form">
            <div className="item">
              <h4>Login</h4>
              <form onSubmit={submitForm}>
                <input type="text" placeholder="User Name" ref={name} />
                <input type="password" placeholder="Password" ref={pass} />
                <p>Forgot password?</p>
                <button>LOGİN</button>
              </form>
            </div>
          </div>
        </div>
        <div className={up ? "login-card up" : "login-card"}>
          <div className="log-in form">
            <div className="item">
              <h4>
                Create <br /> Account
              </h4>
              <form onSubmit={checkForm}>
                <input type="text" placeholder="Name" ref={firstName} />
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" ref={userPass} />
                <button onClick={toggleUp}>SIGN UP</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MiniLogin;
