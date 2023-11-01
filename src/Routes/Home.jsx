import React from "react";
import Card from "../Components/Card";
import { useState, useEffect } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentistas, setDentistas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favCards, setFavCards] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setDentistas(data);
        setLoading(false);
      });
  }, []);

  const guardarElemento = (cardData) => {
    setFavCards([...favCards, cardData]);
    localStorage.setItem('favCards', JSON.stringify([...favCards, cardData]));
  };
 
  

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {dentistas.map((dentista, index) => (
          <Card
            key={index}
            id={dentista.id}
            name={dentista.name}
            username={dentista.username}
            guardarElemento={guardarElemento}
            
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
