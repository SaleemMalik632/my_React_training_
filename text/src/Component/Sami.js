// import "./App1.css";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Style from "./StyleCompoment";
import EcommercePage from "./call";
import ShowMore_ from "./More";
import Send from "./Sendmassage";
import MatrilUI from "./MatrialUI";
import RecipeReviewCard from "./Showcard";
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import MenuIcon from "@mui/icons-material/Menu";


function MyButton() {
  const [count, setCount] = useState(0);
  function fun() {
    setCount(count + 1); //code is ready 
  }
  function dec() {
    setCount(count - 1);
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={fun}> Add </button>
      <button onClick={dec}> Decrease </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h5>Below Me All the Components </h5>
        <Header />
        <Footer />
        <MyButton />
        <Style /> 
        <EcommercePage />
        <ShowMore_ /> 
        <Send />
        <MatrilUI />
        <div className="maincard">
          <RecipeReviewCard />
          <RecipeReviewCard />
          <RecipeReviewCard />
          <RecipeReviewCard /> 
        </div> 
        <AirportShuttleIcon /> 
      </header>
    </div>
  );
}

export default App;
