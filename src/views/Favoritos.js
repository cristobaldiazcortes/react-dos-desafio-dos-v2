import React from "react";
import { useContext } from "react";
import Galeria from "../components/Galeria";
import Contexto from "../context/Contexto";

export default function Favoritos() {
  const { likedFotos } = useContext(Contexto);

  return (
    
      <div className="container">
        <Galeria fotos={likedFotos} />
      </div>
    
  );
}