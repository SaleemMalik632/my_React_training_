import "./Component/App1.css";
import { useState } from "react";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Style from "./Component/StyleCompoment";
import Props from "./Component/Props";
import EcommercePage from "./Component/call";
import ShowMore_ from "./Component/More";
import Send from "./Component/Sendmassage";
import MatrilUI from "./Component/MatrialUI";
import RecipeReviewCard from "./Component/Showcard";
import Ueseffect from "./Component/Ueseffect";
import Reactrout from "./Component/Reactrout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function MyButton() {
  const [count, setCount] = useState(0);
  function fun() {
    setCount(count + 1);
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
        <Reactrout />
        {/* <Header /> */}
        {/* <Footer /> */}
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

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RecipeReviewCard />} />
            <Route path="/about" element={<Header />} />
            <Route path="/contact" element={<Footer />} />
          </Routes>
        </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
