import React from "react";
import Img from "../html-css-template/imagens/sound-waves-pink.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container index">
        <div className="index-content">
          <div className="box-text-index">
            <div className="info-index">
              <blockquote className="my-custom-blockquote">
                <p className="display">A música certa para o seu mood</p>
                <p className="subtitle">
                  organize suas músicas preferidas por categorias e aproveite
                  cada batida{" "}
                </p>
              </blockquote>
            </div>
            <div className="img-index"></div>
            <button className="btn" onClick={() => navigate("/musicas")}>
              começar
            </button>
          </div>
          <img src={Img} alt="" className="index-img" />
        </div>
      </div>
    </>
  );
}

export default Home;
