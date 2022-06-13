import React from "react";
import Submit from "./Submit";
import "./inputbox.css";
import "./form.css";
// import { FcGoogle } from "react-icons/fc";

// const style = { justifyContent: "center",  alignItems: "center", fontSize: "1rem"  };

const Form = () => {
  // handleClickforgot = (e) => {
  //   e.preventDefault();
  //   console.log('The forgot link was clicked.');
  // };

  return (
    <div className="form">
      <h2>Welcome Back!</h2>
      <form onsubmit="console.log('You clicked submit.'); return false">
        <div class="group">
          <input class="client-info" type="email" id="email" required />
          {/* <span class="highlight"></span>
          <span class="bar"></span> */}
          <label for="email">Email</label>
        </div>
        <div class="group">
          <input class="client-info" type="password" id="password" required />
          {/* <span class="highlight"></span>
          <span class="bar"></span> */}
          <label for="password">Password</label>
        </div>

        <div className="options">
          <div class="checkbox">
            <input type="checkbox" name="check" />
            <span>Remember Me</span>
          </div>

          <div className="forgot">
            <a href="#" onClick={(e) => {
            e.preventDefault();
            alert("To be used for password recovery");
          }}>Forgot Password?</a>
          </div>
        </div>
        <div className="login">
          <Submit />
        </div>
        <button
          class="social google"
          id="google"
          onClick={(e) => {
            e.preventDefault();
            alert("Log in with google with that button");
          }}
        >
          Log in with google
          {/* <FcGoogle style={style} /> */}
        </button>
      </form>

      <div className="signup-option">
        <p>Don't have an account yet?</p>
        <a href="#" onClick={(e) => {
            e.preventDefault();
            alert("This will redirect to signup page");
          }}>Sign up</a>
      </div>
    </div>
  );
};

export default Form;
