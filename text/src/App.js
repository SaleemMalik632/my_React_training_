import "./App.css";
import { useState } from "react";
import   Footer  from "./Header";


function MyButton() {
  const [count, setCount] = useState(10);  
  function fun(){
    setCount(count + 1);
  }
  return (
    <button  onClick={fun}> 
      {count} time on it  
    </button>
  );
} 
function App() { 
  return (
    <div className="App">
      <header className="App-header">
        <p>Edit src App.js and save to reload.</p>
         {/* <Header></Header>  */} 
         <Footer></Footer>
        <MyButton></MyButton>
        <a href=  "https://reactjs.org" className="mail" target="_blank" rel="noopener noreferrer" > Learn how to sex  </a>
      </header>
    </div>     
  );
}

export default App;
