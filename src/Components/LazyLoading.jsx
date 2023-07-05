import { lazy, Suspense } from "react";
const ClassComponent = lazy(() => import("./Class"));

const Lazy = () => {
  return (
    <div style={{ marginLeft: 200, marginTop: 50 }}>
      <h1>Lazy Loading Page</h1>
      <p>
        What is Lazy Loading? <br />
        When we launch a React web application, it usually bundles the entire
        application at once, loading everything including the entire web app
        pages, images, content, and much more for us, potentially resulting in a
        slow load time and overall poor performance, depending on the size of
        the content and the Internet bandwidth at the time. Lazy loading allows
        us to load specific components only when they are needed. Typically, we
        also perform code splitting into logical components that can be lazy
        loaded with the content as well. For example, if we have a dashboard
        page that displays a lot of information from various sources when
        clicked, it's always best to keep these components and pages
        lazy-loaded, so they only load when needed or required by the user.
        <br />
        Single Page Applications (SPAs) are designed to contain all pages and
        content within a single document/page. That's why lazy loading comes in
        especially handy when developing SPAs.
        <br />
        we can implement it in our React applications, using two React features
        that make code-splitting and lazy loading easy to implement -
        React.lazy() and React.Suspense. React.lazy() is a function that allows
        us to render dynamic imports in the same way as regular components.
        Using dynamic imports alongside the React.lazy() will enable us to
        import a component just before it renders on a screen. An important
        thing to note is that React.lazy() accepts a function as an argument -
        that function must call the dynamic import() in its body. React.Suspense
        enables us to specify the fallback prop which takes in a placeholder
        content that would be used as a loading indicator while all the lazy
        components get loaded.
        <br />
        We've implemented lazy loading using React.lazy(), but if the code does
        include React.Suspense it will always throw an error saying that our
        “React component suspended while rendering, but no fallback UI was
        specified”. This can be fixed by wrapping the component with
        React.Suspense's fallbackz and attaching the fallback props.
        <br />
        The fallback prop can take a component to show before the original
        content loads up.
        <br />
        Lazy routing is actually a good practice for routes that have a lot of
        content and may slow down your application's load time. Implementing
        lazy loading for React routes is almost identical to what we did earlier
        when lazy loading dynamically imported components. Lazy loading React
        routes refers to dynamically importing a component only when it's
        needed. For example, say we have two routes in our application and two
        components representing those routes. If we implement mentioned routing
        in the following way, each component will be loaded only when we
        navigate to the corresponding route:
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <ClassComponent /> 
      </Suspense>
    </div>
  );
};
export default Lazy;

// How to Implement Lazy Loading With React Router

// EXAMPLE CODE
// ----------------
// import { lazy, Suspense } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// const Home = lazy(() => import('./Home'));
// const Products = lazy(() => import('./Products'));

// function App() {
//    return (
//       <BrowserRouter>
//          <Suspense fallback={<div>Loading...</div>}>
//             <Routes>
//                <Route path="/" element={<Home />} />
//                <Route path="/products" element={<Products />} />
//             </Routes>
//          </Suspense>
//       </BrowserRouter>
//    );
// }
// export default App;
