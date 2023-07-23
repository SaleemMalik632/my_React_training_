// compelete working code for the react router dom 

import EcommercePage from "./call";
import RecipeReviewCard from "./Showcard";
import Header from "./Header";


import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
<Router>
<div className="App">
 <ul className="App-header">
   <li>
     <Link to="/">Home</Link>
   </li>
   <li>
     <Link to="/about">About Us</Link>
   </li>
   <li>
     <Link to="/contact">Contact Us</Link>
   </li>
 </ul>
<Routes>
      <Route exact path='/' element={ < EcommercePage/>}></Route>
      <Route exact path='/about' element={< RecipeReviewCard />}></Route> 
      <Route exact path='/contact' element={<  Header  />}></Route>
</Routes>
</div>
</Router> 