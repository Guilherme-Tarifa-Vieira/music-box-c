import React, { useEffect, useState } from "react";
import imagemErro from "../html-css-template/imagens/target-red.png";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  const [image, setImage] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 700) {
        setImage(false);
        console.log(image);
      } else if (window.innerWidth > 700) {
        setImage(true);
        console.log(image);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [image]);

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

          <div className={`img-lateral ${!image ? "img-min" : ""}`}>
            <img src={imagemErro}

              alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
