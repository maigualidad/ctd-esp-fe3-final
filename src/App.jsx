import {  Route,  Routes} from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import Contact from "./Routes/Contact"
import { useTheme } from "./Components/utils/global.context"


function App() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={isDarkMode ? 'dark' : 'App'}>
      <Navbar toggleTheme={toggleTheme}/>
  
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Home" element={<Home/>} />
          <Route exact path="/Dentist/:id" element={<Detail/>} />
          <Route exact path="/Favs" element={<Favs/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>

      <Footer />
    </div>
  );
}

export default App;
