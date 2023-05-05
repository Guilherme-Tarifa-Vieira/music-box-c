import React from "react";
import logo from "../html-css-template/imagens/logo-verde.png";
import avatar from "../html-css-template/imagens/avatar.png";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <div className="container">
          <img
            src={logo}
            alt="Logo"
            className="logo"
            onClick={() => navigate("/")}
          />
          <img src={avatar} alt="Avatar" className="avatar" />
        </div>
      </nav>
    </>
  );
}

export default Menu;
