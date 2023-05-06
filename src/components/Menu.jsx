import React from "react";
import avatar from "../html-css-template/imagens/avatar.png";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navigate">
        <div className="container">


          <h1
            onClick={() => navigate("/")}
          >MUSIC BOX</h1>
          <img src={avatar} alt="Avatar" className="avatar" />
        </div>
      </nav>
    </>
  );
}

export default Menu;
