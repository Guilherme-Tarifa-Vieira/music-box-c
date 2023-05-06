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

  function handleResize() {
    if (window.innerWidth >= 760 && window.innerWidth <= 1044) {
      setColunas(2);
    } else if (window.innerWidth < 760) {
      setColunas(1);
    } else {
      setColunas(3);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    api.get()
      .then((respostaObtida) => {
        setMusicas(respostaObtida.data);
      })
      .catch((erroObtido) => {
        console.log(erroObtido);
      });

    handleResize(); // chamando a função handleResize aqui

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
          className={`music-boxes ${colunas === 3
            ? "three-columns"
            : colunas === 2
              ? "two-columns"
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
