import React, { useEffect, useState } from "react";
import Img from "../html-css-template/imagens/sound-waves-pink.png";
import { useNavigate } from "react-router-dom";

function Home() {
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

    return () => window.removeEventListener("resize", handleResize);
  }, [image]);

  return (
    <>
      <div className="container index">
        <div className="index-content">
          <div className="box-text-index">
            <div className="info-index">
              <blockquote
                className={`my-custom-blockquote ${!image ? "custom-min" : ""}`}
              >
                <p className={`display ${!image ? "display-min" : ""}`}>
                  A música certa para o seu mood
                </p>
                <p className="subtitle">
                  organize suas músicas preferidas por categorias e aproveite
                  cada batida{" "}
                </p>
              </blockquote>
            </div>
            <button className="btn" onClick={() => navigate("/musicas")}>
              começar
            </button>
          </div>
          <img
            src={Img}
            alt=""
            className={`index-img ${!image ? "img-false" : ""}`}
            s
          />
        </div>
      </div>
    </>
  );
}

export default Home;
