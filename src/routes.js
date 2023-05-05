import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Musicas from "./pages/Musicas";
import Adicionar from "./pages/Adicionar";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Menu from "./components/Menu";

function Rotas() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/musicas" element={<Musicas />} />
        <Route path="/adicionar" element={<Adicionar />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
