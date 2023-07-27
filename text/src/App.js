import "./Component/App1.css";
import Header from "./Component/Header";
import EcommercePage from "./Component/call";
import RecipeReviewCard from "./Component/Showcard";
import Sami from "./Component/Sami"; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Nav  from "./Component/nav";


function App() {
  return ( 
    <div className=""> 
      <Router>
        <div className="">
          <ul className=""> 
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Sami</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/showmore">ShowMore</Link> 
            </li>
          </ul> 
          <Routes>
            <Route exact path='/' element={< Nav />} > </Route> 
            <Route exact path='/about' element={< Sami />}></Route> 
            <Route exact path='/contact' element={<  Header />}></Route>
            <Route exact path='*' element={'page Not Found '}></Route>  
            <Route exact path='/showmore' element={< RecipeReviewCard/>}></Route> 
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
