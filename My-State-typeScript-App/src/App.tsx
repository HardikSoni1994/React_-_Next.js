import { useEffect } from "react";

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
      <h1>Hello typescript state app</h1>
      <p>Name: {name}</p>
      <p>Age: {age.toString()}</p>
      <p>Phone: {phone.toString()}</p>
      <p>Theme: {isTheme ? 'Light' : 'Dark'}</p>
    </>
}

export default App;
