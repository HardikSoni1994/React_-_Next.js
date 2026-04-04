import { useState } from "react";
import Location from "./location";

function app() {

 const[counter, setCounter] = useState(1);

  let myBtnStyle = {
    margin: '10px', 
    backgroundColor: 'lightgrey', 
    color: 'goldenrod', 
    padding: '5px 12px', 
    fontSize: '25px', 
    border: 'solid 2px black', 
    borderRadius: '5px'
  }
  
  return <>
  
    <center>
      <h2 style={{color: "goldenrod", textAlign: "center", fontSize: "45px"}}>Counter App</h2>

      {/* <h3> { counter }</h3> */}
      <div>
        <button style={myBtnStyle} onClick={ () => { if (counter < 20) { setCounter(counter + 1)}}}>➕</button>
        { counter }
        <button style={myBtnStyle} onClick={ () => { if (counter > 1) { setCounter(counter - 1)} }}>➖</button>
      </div>
      <Location city="Surat" dist="Gujarat" country="India" counter={counter} />
    </center>
  
  </>

}

export default app;