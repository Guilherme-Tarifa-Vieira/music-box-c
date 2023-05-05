import React, { useState } from "react";
import imagemLateral from "../html-css-template/imagens/half-circles-pink-blue.png";
import api from "../api";
import { useNavigate } from "react-router-dom";

function Adicionar() {
  const [novaMusica, setNovaMusica] = useState();
  const navigate = useNavigate();

  function cadastrar(e) {
    e.preventDefault();

    const novaMusica = {
      nome: e.target.nome.value,
      artista: e.target.art.value,
      genero: e.target.gen.value,
      ano: e.target.ano.value,
      imagem: e.target.img.value,
    };

    api
      .post("/", novaMusica)
      .then((res) => {
        navigate("/musicas");
      })
      .catch((err) => {
        console.log("Deu erro: " + err);
      });
  }

  return (
    <>
      <div className="container">
        <div className="add-music">
          <div className="formulario">
            <h1>adicionar</h1>

            <br />

            <form onSubmit={cadastrar}>
              <label>
                Música: <br />
                <input name="nome" type="text" />
              </label>
              <br />
              <label>
                Artista: <br />
                <input name="art" type="text" />
              </label>
              <br />
              <label>
                Genêro: <br />
                <input name="gen" type="text" />
              </label>
              <br />
              <label>
                Ano de Lançamento: <br />
                <input name="ano" type="text" />
              </label>
              <br />
              <label>
                {" "}
                Imagem (url): <br />
                <input name="img" type="text" />
              </label>
              <br />
              <button type="submit" className="btn">
                Enviar
              </button>
            </form>
          </div>

          <div className="img-lateral">
            <img src={imagemLateral} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Adicionar;
