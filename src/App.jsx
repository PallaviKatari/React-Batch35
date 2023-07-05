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
//Render Props
import RenderProps from "./Components/RenderProps";
//Higher Order Components
import TodosItems from "./Components/TodoHOC";
//Auth Guard
import LoginPage from "./Components/LoginPage";
import ProtectedPage from "./Components/ProtectedPage";
import PrivateElement from "./Components/PrivateRoute";
//Lazy Loading
import Lazy from "./Components/LazyLoading";

//Component
function App() {
  //logical - JS

  //UI - Will be given in the return statement - HTML
  return (
    <div>
      <Nav />
      {/* <h1 style={{color:'blue',fontSize:20}}>Inline Style</h1> */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* <Route
          path="protected"
          element={
            <PrivateRoute>
              <ProtectedPage name={"John"} />
            </PrivateRoute>
          }></Route> */}
        <Route exact path="" element={<Home />} />
        <Route
          exact
          path="Gallery"
          element={
            <PrivateElement>
              <ProtectedPage name={"John"} />
              <Gallery />
            </PrivateElement>
          }
        />
        <Route
          exact
          path="Products"
          element={
            <PrivateElement>
              <ProtectedPage name={"John"} />
              <Products />
            </PrivateElement>
          }
        />
        <Route exact path="sort" element={<Sort />} />
        <Route exact path="lifecycle" element={<PrivateElement><ProtectedPage name={"John"} /><LifeCycle/></PrivateElement>} />
        <Route exact path="users" element={<PrivateElement><ProtectedPage name={"John"} /><UserToggle /></PrivateElement>} />
        <Route exact path="crud" element={<UserHome />} />
        <Route exact path="axios" element={<PersonList />} />
        <Route
          exact
          path="cart"
          element={
            <PrivateElement>
              <ProtectedPage name={"John"} />
              <AddToCart />
            </PrivateElement>
          }
        />
        <Route exact path="hooks" element={<ReactHooks />} />
        <Route exact path="renderprops" element={<RenderProps />} />
        <Route exact path="hoc" element={<TodosItems />} />
        <Route exact path="lazy" element={<Lazy />} />
      </Routes>
    </div>
  );
}

export default App;
