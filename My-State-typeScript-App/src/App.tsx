import { useEffect } from "react";
import TableView from "./TableView";

function App() {
  let name: String = "Hardik";
  let age: Number = 30;
  let isTheme: Boolean = false;
  let phone: Number | String = 0;

  // const callBack = () => {
  //   console.log("useEffect called");
    
  // }

  useEffect(() => {
  console.log("useEffect called");
  }, []);

  name += " Soni";
  phone = 8866299606;

  return <>
      <div className="container mt-3">
        <div>
          <h1>Hello typescript state app</h1>
          <p>Name: {name}</p>
          <p>Age: {age.toString()}</p>
          <p>Phone: {phone.toString()}</p>
          <p>Theme: {isTheme ? 'Light' : 'Dark'}</p>
        </div>
        <div className="card">
          <div className="card-body">
            This is some text within a card body.
          </div>
        </div>
        
      <TableView/>
      </div>
    </>
}

export default App;
