import  { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

const [dentista, setDentista] = useState({});
const  [loading, setLoading] = useState(true);
let { id } = useParams();


useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users/" + id)
    .then(response => response.json())
    .then(data => {
      setDentista(data);

      setLoading(false);
     
    })
},); 



  return (
    <>

    {loading? (
      <p>loading...</p> 
    ) : (
   <div className="tablaDetails">
      <h1>Dentist Table Id</h1>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Página Web</th>
            </tr>
          </thead>
          <tbody>
              <tr>
              <td>{dentista?.name}</td>
                <td>{dentista?.email}</td>
                <td>{dentista?.phone}</td>
                <td>{dentista?.website}</td>
              </tr>
          </tbody>
        </table>
        </div>
    )
    }

    </>
  )
}

export default Detail