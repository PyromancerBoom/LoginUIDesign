import React from "react";
import logo from "./../../Logo/LogoTransparent.png";
import Form from "./LoginForm/Form";
import "./right.css";

const ContainerR = () => {
  return (
    <div className="containerR">
      <a href="#">
      <img className="logo" src={logo} alt="Logo" />
      </a>
      <div className="loginform" style={{
        position: 'absolute', left: '75%', top: '65%',
        transform: 'translate(-50%, -50%)'
    }}>
      <p>Another inspiring Tagline here</p>
        <Form />
      </div>   
    </div>
  );
};

export default ContainerR;
