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
            <div>
              <h1>Adicionar</h1>
              <h3>Cadastre uma nova música á sua lista de favoritos.</h3>
              <br />
            </div>

            <br />

            <form onSubmit={cadastrar}>
              <label>
                <input name="nome" type="text" placeholder="Digite o nome da música" />
              </label>
              <br />
              <label>
                <input name="art" type="text" placeholder="Digite o nome do artista" />
              </label>
              <br />
              <label>
                <input name="gen" type="text" placeholder="Qual genêro essa música faz parte?" />
              </label>
              <br />
              <label>
                <input name="ano" type="text" placeholder="Ano do lançamento" />
              </label>
              <br />
              <label>
                <input name="img" type="text" placeholder="Caminho da imagem URL(web)" />
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
