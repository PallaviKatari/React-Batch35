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
import Sort from "./Components/Sort";
import LifeCycle from "./Components/LifeCycle";
import UserToggle from "./Components/MapJson";
//CRUD
import UserHome from "./Components/CRUD/UserHome";
//Axios
import PersonList from "./Components/Axios";
//Add to Cart
import AddToCart from "./Components/AddToCart";
//React Hooks Usecases
import ReactHooks from "./Components/ReactHooks";
//Component
function App() {
  //logical - JS

  //UI - Will be given in the return statement - HTML
  return (
    <div>
      <Nav />
      {/* <h1 style={{color:'blue',fontSize:20}}>Inline Style</h1> */}
      <Routes>
        <Route exact path="Home" element={<Home />} />
        <Route exact path="Gallery" element={<Gallery />} />
        <Route exact path="Products" element={<Products />} />
        <Route exact path="sort" element={<Sort />} />
        <Route exact path="lifecycle" element={<LifeCycle />} />
        <Route exact path="users" element={<UserToggle />} />
        <Route exact path="crud" element={<UserHome />} />
        <Route exact path="axios" element={<PersonList />} />
        <Route exact path="cart" element={<AddToCart />} />
        <Route exact path="hooks" element={<ReactHooks />} />
      </Routes>
    </div>
  );
}

export default App;
