import { useState } from "react";
import { sculptureList } from "../data/sculptures.js";

export default function Gallery() {
  //State
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  //Next sculpture image
  function handleNextClick() {
    setIndex(index + 1);
  }

  //Toggle sculpture details
  function handleMoreClick() {
    setShowMore(!showMore);
  }

  //index=0
  //sculptureList from sculptures.js
  let sculpture = sculptureList[index];

  return (
    //React Fragments
    <>
      <button onClick={handleNextClick} className="btn btn-warning ms-5">
        Next
      </button>
      <h2 className="m-5">
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3 className="ms-5">
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick} className="btn btn-primary m-5">
        {/* Conditional Rendering */}
        {showMore ? "Hide" : "Show"} details
      </button>
      <br />
      {/* Both the conditions must satisfy */}
      {showMore && <p className="ms-5">{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
        height={250}
        width={800}
        // Inline Styling in React
        style={{ marginLeft: 200 }}
      />
    </>
  );
}
