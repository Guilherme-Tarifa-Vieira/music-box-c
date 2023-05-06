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

    handleResize();
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
                  Playlist Perfeita: Encontre a trilha sonora ideal para cada mood
                </p>
                <p className="subtitle">
                  Organize suas músicas favoritas em diferentes categorias e encontre a trilha sonora perfeita para o seu humor. Deixe cada batida tocar no ritmo da sua vida{" "}
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
