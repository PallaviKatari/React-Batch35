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
import Products from "./Components/ProductApi";
//Component
function App() {
  //logical - JS

  //UI - eill be given in the return statement - HTML
  return (
    <div>
      <Nav />
      {/* <h1 style={{color:'blue',fontSize:20}}>Inline Style</h1> */}
      <Routes>
        <Route exact path="Home" element={<Home />} />
        <Route exact path="Gallery" element={<Gallery />} />
        <Route exact path="Products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
