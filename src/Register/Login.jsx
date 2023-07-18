import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { GlobalContext } from "../Context/GlobalContext";
import MiniLogin from "./MiniLogin";

const Login = () => {
  const [left, setLeft] = useState(false);
  const toggleLeft = () => {
    setLeft(!left);
  };

  const { user, setUser } = useContext(GlobalContext);

  const location = useNavigate();
  // Login
  const submitForm = (e) => { 
    e.preventDefault();
    if (
      user.userName === name.current.value && //user.userName == "Aslan" &&
      user.password === pass.current.value &&
      user.userName &&
      user.password !== ""
    ) {
      localStorage.setItem("User", JSON.stringify(user));
      location("/dashboard");
      window.location.reload();
    }
    // else  if (
    //   user.userName === name.current.value && user.userName !== "Aslan" &&
    //   user.password === pass.current.value &&
    //   user.userName &&
    //   user.password !== ""
    // ) {
    //   localStorage.setItem("User", JSON.stringify(user));
    //   location("/");
    //   window.location.reload();
    // }
    else if (name.current.value == "" || pass.current.value == "") {
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

  const passage = () =>{
    if (firstName && userPass !== "") {
      return setLeft(!left)
    }
  }

  const firstName = useRef();

  const userPass = useRef();

  return (
    <>
      <section id="registration">
        <div className="register-card">
          <div className={left ? "item-owr1 owr tr-0" : "item-owr1 owr"}>
            <h4>Welcome Back!</h4>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button onClick={toggleLeft}>Logİn</button>
          </div>
          <div className={!left ? "item-owr2 owr tr-0" : "item-owr2 owr"}>
            <h4>Hello, Friend!</h4>
            <p>Enter your personal details and start journey with us</p>
            <button onClick={toggleLeft}>Sign Up</button>
          </div>
          <div className={left ? "owerlay" : "owerlay right"}></div>
          <div className="sign-in form">
            <div className={!left ? "item" : "item item-hid2"}>
              <h4>Login</h4>
              <form onSubmit={submitForm}>
                <input type="text" placeholder="User Name" ref={name} />
                <input type="password" placeholder="Password" ref={pass} />
                <p>Forgot password?</p>
                <button>LOGİN</button>
              </form>
            </div>
          </div>
          <div className="log-in form">
            <div className={left ? "item" : "item item-hid1"}>
              <h4>
                Create <br /> Account
              </h4>
              <form onSubmit={checkForm}>
                <input type="text" placeholder="Name" ref={firstName} />
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" ref={userPass} />
                <button onClick={passage}>SIGN UP</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <MiniLogin/>
    </>
  );
};

export default Login;
