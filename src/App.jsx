//logo - alias
// import logo from "./logo.svg";
import "./App.css";

//Routing in React
//npm install react-router-dom@6 and npm audit fix --force
import { Routes, Route } from "react-router-dom";

//importing components
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import Nav from "./Components/Navbar";
//Component
function App() {
  //logical - JS

  //UI - eill be given in the return statement - HTML
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path="Home" element={<Home />} />
        <Route exact path="Gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
