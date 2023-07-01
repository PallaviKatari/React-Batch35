import React from 'react'  
  
function Textbox({name,handleClick}) {  
    console.log("Textbox Rendered")  
    return (  
        <div> 
            <h3>TextBox Component</h3> 
            <input type="text" placeholder="Enter Name" value={name} onChange={handleClick} style={{width:200,marginBottom:100}}/>  
        </div>  
    )  
}  
  
export default Textbox 

//useCallback()
//export default React.memo(Textbox) 