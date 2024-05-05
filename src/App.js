import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import Milieu from "./Milieu";
import Ajouteremploye from './Ajouteremploye';
import Modifier from './Modifier';
import Surrprimer from'./Surrprimer';
import Consulter from'./Consulter';
import Login from "./Login";

function App() {
  return (
    <div className="wrapper">
    <Router>
     <div>
       <Header />
       <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/menu_and_milieu" element={<div><Menu /><Milieu /></div>} />
        <Route path="/ajouteremploye" element={<Ajouteremploye />} />
          <Route path="/surrprimer" element={<Surrprimer/>} />
            <Route path="/modifier" element={<Modifier/>} />
             <Route path="/consulter" element={<Consulter/>} />
                 </Routes>
                     </div>
                 </Router>
    </div>
  );
}

export default App;
