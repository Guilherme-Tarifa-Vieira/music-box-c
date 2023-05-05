import React from "react";
import imagemErro from "../html-css-template/imagens/target-red.png";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="add-music">
          <div className="formulario-erro">
            <h1>404</h1>

            <p className="subtitle">se perdeu? nada para ver por aqui...</p>
            <button className="btn" onClick={() => navigate(-1)}>
              voltar
            </button>
          </div>

          <div className="img-lateral">
            <img src={imagemErro} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
