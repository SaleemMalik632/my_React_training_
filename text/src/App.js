import "./App.css";
import { useState } from "react";
import   Footer  from './Component/Footer'
import   Header  from './Component/Header' ;
import  Style  from './Component/StyleCompoment'
import Props  from "./Component/Props";


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
        <h5>Below Me All the Components </h5>
          <Header/> 
          <Footer/>
          <MyButton/>  
        <Style /> 
        <Props name = "saleem" age = "Malik"  number  = {30}/>  
      </header> 

    </div>     
  );
}

export default App;
