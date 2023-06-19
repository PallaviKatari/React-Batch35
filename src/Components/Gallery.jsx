import { useState } from "react";
import { courseList } from "../data/course.js";
//importing Profile Component
import Profile from "./Props.jsx";
import { CurrentUser } from "./Props.jsx";
//React FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";

export default function Gallery() {
  //State
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  //Next course image
  function handleNextClick() {
    setIndex(index + 1);
  }

  //Previous course image
  function handlePreviousClick() {
    setIndex(index - 1);
  }

  //Toggle course details
  //Initial value - false
  function handleMoreClick() {
    setShowMore(!showMore); //true
  }

  //index=0
  //courseList from course.js
  let course = courseList[index];

  return (
    <div style={{ marginLeft: 150, marginTop: 50 }}>
      <CurrentUser/>
      {/* Next event */}
      <button
        onClick={handleNextClick}
        className="btn btn-warning ms-5"
        style={{ borderRadius: 70 }}>
          {/* Nested Component in a button */}
        <Profile /> <FontAwesomeIcon icon={faRightLong} />
      </button>
      {/* Previous event */}
      <span>
        <button
          onClick={handlePreviousClick}
          className="btn btn-warning ms-5"
          style={{ borderRadius: 70 }}>
          <Profile /> <FontAwesomeIcon icon={faLeftLong} />
        </button>
      </span>
      <h2 className="m-5">
        <i>{course.name} </i>
      </h2>
      <h3 className="ms-5">
        ({index+1} of {courseList.length})
      </h3>
      <button onClick={handleMoreClick} className="btn btn-primary m-5">
        {/* Conditional Rendering */}
        {showMore ? "Read Less" : "Read more..."}
      </button>
      <br />
      {/* Both the conditions must satisfy */}
      {showMore && <p className="ms-5">{course.description}</p>}
      <img
        src={course.url}
        alt={course.alt}
        height={250}
        width={800}
        // Inline Styling in React
        style={{ marginLeft: 200 }}
      />
    </div>
  );
}
