import "./Component/App1.css";
import Header from "./Component/Header";
import RecipeReviewCard from "./Component/Showcard";
import Sami from "./Component/Sami";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./Component/nav";
import ComA from "./Component/ComA";
import { useState, createContext } from "react";
import Tostify from "./Component/Tostify";


export const MyContext = createContext("saleem malik ");



function App() {

  const [text,setname] = useState({Name:'saleem' , age:'19'});  
  const [text1, settext1] = useState('this is another text  ');

  return (
    
    <MyContext.Provider value={{ text, text1, settext1  , setname }}>
      
      <div className="">
        <Router>
          <Nav></Nav>
          <Routes>
            <Route exact path='/' element={< Sami />} > </Route>
            <Route exact path='/about' element={< Header />}></Route>
            <Route exact path='/Blog' element={<  Tostify />}></Route>
            <Route exact path='/Testing' element={< ComA />}></Route>
            <Route exact path='*' element={'page Not Found '}></Route>
          </Routes>
        </Router>
      
      </div>
    </MyContext.Provider>
  );
}

export default App;