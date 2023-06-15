import React from "react";

//functional component

function Home() {
  return (
    <div>
      <h1>HOME COMPONENT</h1>
      <h1>Welcome to Functional Component</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse
        voluptate totam veniam laboriosam molestias atque, porro a reprehenderit
        commodi fuga repellendus dicta. Eveniet voluptatem sequi molestiae id
        iste cum.
      </p>
      <Home1 />
      <Home2 />
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
