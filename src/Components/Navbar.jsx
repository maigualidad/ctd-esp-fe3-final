import React from 'react'
import { Link } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = ({toggleTheme}) => {

  return (
    <nav>
      <div><p>D<span>H</span> Odonto</p></div>
      <div>
      <Link to="/Home" className="linksNav">Home</Link>
      <Link to="/Contact" className="linksNav">Contact</Link>
      <Link to="/Favs" className="linksNav">Favs</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className='favButton' onClick={toggleTheme}>Change theme</button>
      </div>
    </nav>
  )
}

export default Navbar;