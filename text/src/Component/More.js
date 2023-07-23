import { useState } from "react";
import { Array } from "./data.js";

function Gallery() {
  const [count, setIndex] = useState(0);  
  const [showMore, setShowMore] = useState(false);
  const hasNext = count < Array.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(count + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  } 

  let one = Array[count]; 
  return (
    <>
      <button onClick={handleNextClick}>Next</button> 
      <h2> <i>{one.name} </i>by {one.artist}  </h2>
      <h3>   ({count + 1} of {Array.length})  </h3>  
      <button onClick={handleMoreClick}>{showMore ? "Hide" : "Show"} details</button>
      {showMore && <p>{one.description}</p>} 
      <img src={one.url} alt={one.alt} /> 
    </>
  );
}

export default Gallery;
