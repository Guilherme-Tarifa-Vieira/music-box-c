import React, { useEffect } from "react";
import api from "../api"; // importando a instância do Axios de "api.js"
import { useState } from "react";
import ItemMusica from "../components/ItemMusica";
import { useNavigate } from "react-router-dom";

function Musicas() {
  const [musicas, setMusicas] = useState([]); // criando estado de vetor para uma lista de músicas
  const navigate = useNavigate();
  const [colunas, setColunas] = useState(3);

  function deletarMusica(id) {
    api
      .delete(`/${id}`)
      .then((res) => {
        setMusicas(musicas.filter((musica) => musica.id !== id));
      })
      .catch((err) => {
        console.log("Deu erro: " + err);
      });
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1044) {
        setColunas(3);
      } else if (window.innerWidth >= 760) {
        setColunas(2);
      } else {
        setColunas(1);
      }
    }

    window.addEventListener("resize", handleResize);

    api
      .get() // invocando o método "get" do axios utilizando a URL base instanciada em "api.js"
      .then((respostaObtida) => {
        // método get responde uma Promise que será resolvida, e quando obtiver uma resposta, cairá no "then" recebendo a resposta como parâmetro
        console.log(respostaObtida.data); // exibindo o atributo "data", que possui o vetor de dados do objeto de resposta que foi recebido
        setMusicas(respostaObtida.data); // utilizando o setter para alterar o valor do estado (useState) de "musicas"
      })
      .catch((erroObtido) => {
        // caso a requisição falhe, o "catch" pegará o erro, recebendo como parâmetro de uma função
        console.log(erroObtido); // exibindo o erro que ocorreu na requisição
      });

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="container">
        <div className="filter">
          <button className="btn" onClick={() => navigate("/adicionar")}>
            Adicionar
          </button>
        </div>
      </div>

      <div className="container">
        <div
          className={`music-boxes ${
            colunas === 2
              ? "two-columns"
              : colunas === 3
              ? "three-columns"
              : colunas === 1
              ? "one-columns"
              : ""
          }`}
        >
          {musicas.map((musica) => (
            <React.Fragment key={musica.id}>
              <ItemMusica
                id={musica.id}
                nome={musica.nome}
                artista={musica.artista}
                genero={musica.genero}
                ano={musica.ano}
                imagem={musica.imagem}
                deletar={deletarMusica}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default Musicas;
