//logo - alias
// import logo from "./logo.svg";
import "./App.css";
//importing components
import Home from './Components/Home'
import Class from './Components/Class'
import State1 from "./Components/State";
import Gallery from "./Components/StateToggle";
import Theme from "./Components/Theme";
//Component
function App() {
  //logical - JS

  //UI - eill be given in the return statement - HTML
  return (
    <div>
      <Theme/>
      {/* <h1>Welcome to React 18</h1>
      <h2>Have fun with React</h2>
      <hr></hr> */}
      {/* Reuse/Nested the Home Component */}
      {/* <Home/>
      <Class/>
      <hr></hr>
      <State1/>
      <hr/> */}
      <Gallery/>
    </div>
  );
}

export default App;
