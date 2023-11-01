import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const favoritosGuardados = JSON.parse(localStorage.getItem('favCards')) || [];
    setFavoritos(favoritosGuardados);
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favoritos.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </>
  );
};

export default Favs;
