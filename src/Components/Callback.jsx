//React performance optimizations for functions

//In React, useCallback() hook is another important hook which is used for performance optimization. 
// When we implement or call any component, all components re-render every time any call is made. 
// For a small application, it will not have much effect. 
// But when dealing with a large application, it will give performance issues. 
// So, useCallback() provides a way to render components only when required.

//Scenario 1 - without useCallback()

import React, { useState } from 'react';  
import Title from './Title';  
import Button from './Button'; 
import Textbox from './TextBox'; 

function Callback() {  

  const [count, setCount] = useState(0)  
  const [name, setName] = useState("")  

  const incrementCounter = () => {  
    setCount(count + 1)  
  }  

  const updateName = (e) => {  
    setName(e.target.value)  
  }  

  return (  
    <div className="App" style={{marginTop:100}}>  
      <Title />  

      <Button count={count} handleClick={incrementCounter} />  

      <label>Name is {name}</label>  
      <Textbox text={name} handleClick={updateName} />  
    </div>  
  );  
}  

export default Callback; 

//Scenario 2 - with useCallback()

//To avoid the rerendering of components in Scenario 1, there is a need for useCallback().
//Now, while the exporting Title,Button and TextBox component adds React.Memo() function, 
//which will render only if there will be a change in props or state in Title,Button and TextBox components

// import React, { useState, useCallback } from 'react'
// import Title from './Title';
// import Button from './Button';
// import Textbox from './TextBox';

// function Callback() {
//     const [count, setCount] = useState(0) //Button
//     const [name, setName] = useState("") //TextBox

    //Button Component
    // const incrementCounter = useCallback(() => {
    //     setCount(count + 1)
    // }, [count])

    //TextBox
//     const updateName = useCallback((e) => {
//         setName(e.target.value)
//     },[])

//     return (
//         <div>
//             <h1>React useCallback</h1>
//             {/* TITLE COMPONENT */}
//             <Title />
//             {/* BUTTON COMPONENT */}
//             <Button count={count} handleClick={incrementCounter} />
//             <br/>
//             <label>My name is {name}</label>
//             {/* TEXTBOX COMPONENT */}
//             <Textbox text={name} handleClick={updateName} />
//         </div>
//     )
// }

// export default Callback 

//useCallback() hook will return a memorized version of the 
// callback function that will change only when dependencies have changed. 
// It is useful when passing callbacks to optimized child components 
// that rely on reference equality to prevent unnecessary renders.

//So, this way, we can optimize performance.
 
// useCallback() hook provides an efficient way to write code 
// and organize components by rendering a component only when 
// it is required which also provide performance improvement and 
// code optimization. It is used with React.memo() 
// which makes sure that the no extra render should be 
// performed unnecessarily. So, this way the complete flow works.
 