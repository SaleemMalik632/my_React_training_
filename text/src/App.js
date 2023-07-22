import "./App.css";
import { useState } from "react";
import   Footer  from './Component/Footer'
import   Header  from './Component/Header' ;
import  Style  from './Component/StyleCompoment'
import Props  from "./Component/Props";
import EcommercePage  from  './Component/call';


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
        <EcommercePage />
        <Props name = "saleem" age = "nnnlik"  number = {0}/>    
      </header> 

    </div>     
  );
}

export default App;
