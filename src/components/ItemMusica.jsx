import React, { useState } from "react";
import capaPadrao from "../html-css-template/imagens/capa.png";
import editIcon from "../html-css-template/imagens/edit-icon.png";
import deleteIcon from "../html-css-template/imagens/delete-icon.png";

import api from "../api";

function ItemMusica(props) {
  const estiloCard = {
    backgroundImage: `url(${props.imagem ? props.imagem : capaPadrao})`,
  };

  const [nome, setNome] = useState(props.nome);
  const [artista, setArtista] = useState(props.artista);
  const [categoria, setCategoria] = useState(props.genero);
  const [ano, setAno] = useState(props.ano);

  const [edit, setEdit] = useState(false);

  function atualizarMusica() {
    const musicaAtt = {
      nome,
      artista,
      categoria,
      ano,
    };

    api
      .put(`/${props.id}`, musicaAtt)
      .then((res) => {
        setEdit(false);
      })
      .catch((err) => {
        alert("Deu erro: " + err);
      });
  }

  return (
    <>
      <div className="card-music" style={estiloCard}>
        <div className="icons">
          <img src={editIcon} alt="" onClick={() => setEdit(true)} />
          <img
            src={deleteIcon}
            alt=""
            onClick={() => props.deletar(props.id)}
          />
        </div>
        <div className="info-music">
          <p>
            <strong className="card-title">música: </strong>
            <input
              disabled={!edit}
              className={edit ? "input-music-enable" : "input-music-disabled"}
              type="text"
              onChange={(e) => setNome(e.target.value)}
              defaultValue={nome}
            />
          </p>
          <p>
            <strong className="card-title">artista: </strong>
            <input
              disabled={!edit}
              className={edit ? "input-music-enable" : "input-music-disabled"}
              type="text"
              onChange={(e) => setArtista(e.target.value)}
              defaultValue={artista}
            />
          </p>
          <p>
            <strong className="card-title">categoria: </strong>
            <input
              disabled={!edit}
              className={edit ? "input-music-enable" : "input-music-disabled"}
              type="text"
              onChange={(e) => setCategoria(e.target.value)}
              defaultValue={categoria}
            />
          </p>
          <p>
            <strong className="card-title">ano: </strong>
            <input
              disabled={!edit}
              className={edit ? "input-music-enable" : "input-music-disabled"}
              type="text"
              onChange={(e) => setAno(e.target.value)}
              defaultValue={ano}
            />
          </p>
          <button
            className={edit ? "btn-salvar-enable" : "btn-salvar-disabled"}
            onClick={atualizarMusica}
          >
            Salvar
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemMusica;
