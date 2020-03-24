import React, { useState } from 'react';
const Count=()=>{
  const[click,setCount]=useState(0);
  return(
    <div>  
      <p>Current count is "{click}"</p>
    <button onClick={()=>setCount(click+1)}>Click to increment by 1</button>
    <button onClick={()=>setCount(click-1)}>Click to decrease by 1</button>   
  </div>
  );
}


export default Count;