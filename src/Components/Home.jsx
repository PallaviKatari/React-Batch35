import React from "react";
//import of components
import Theme from "./Theme";
import State1 from "./State";
import CardProfile from "./PropCards";
import { CurrentUser } from "./Props";

//functional component

function Home() {
  return (
    <div style={{ marginLeft: 100, marginTop: 50 }}>
      <h4>
        HOME COMPONENT - <CurrentUser />
      </h4>
      <Theme />
      <CardProfile />
      <State1 />
      <h1>Welcome to Functional Component</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse
        voluptate totam veniam laboriosam molestias atque, porro a reprehenderit
        commodi fuga repellendus dicta. Eveniet voluptatem sequi molestiae id
        iste cum.
      </p>
      <hr />
      <Home1 />
      <hr />
      <Home2 />
      <hr />
      <Home3 />
    </div>
  );
}

//default export
export default Home;

function Home1() {
  return (
    <div>
      <h1>Welcome to Functional Component1</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse
        voluptate totam veniam laboriosam molestias atque, porro a reprehenderit
        commodi fuga repellendus dicta. Eveniet voluptatem sequi molestiae id
        iste cum.
      </p>
    </div>
  );
}

function Home2() {
  return (
    <div>
      <h1>Welcome to Functional Component2</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse
        voluptate totam veniam laboriosam molestias atque, porro a reprehenderit
        commodi fuga repellendus dicta. Eveniet voluptatem sequi molestiae id
        iste cum.
      </p>
    </div>
  );
}

//Arrow function
const Home3 = () => {
  return (
    <div>
      <h1>Welcome to Arrow Functional Component3</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse
        voluptate totam veniam laboriosam molestias atque, porro a reprehenderit
        commodi fuga repellendus dicta. Eveniet voluptatem sequi molestiae id
        iste cum.
      </p>
    </div>
  );
};

export { Home1, Home2, Home3 };
