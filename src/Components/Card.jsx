import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Doctor from "./../images/doctor.jpg"





const Card = ({ name, username, id, guardarElemento}) => {
  const cardData = { id, name, username };
  const [guardado, setGuardado] = useState(false);

useEffect(()=> {
  const cardsGuardadas = JSON.parse(localStorage.getItem('favCards'))
  if (cardsGuardadas && cardsGuardadas.find((c)=>c.id ===id)) {
      setGuardado(true);
  }
}, [id])

  
  return (
    <>
    <div className="card">
        <Link to={`/Dentist/${id}`} className="linkCard">
            <img src={Doctor} alt="icono doctor" className="imagen"></img> </Link>
            <p>{name}</p>
            <p>{username}</p>
        
        
        {guardado ? 
        <button onClick={()=>guardarElemento(cardData)} disabled={guardado}>Guardado</button> : 
        <button onClick={()=>guardarElemento(cardData)}>Agrega favorito</button> }
    </div>
    </>
  );
};

export default Card;
