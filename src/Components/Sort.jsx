import React, { useState, useEffect } from "react";
//Events Component
import Events from "./Events";

const movies = [
  {
    id: 1,
    name: "Harry Potter",
    country: "UK",
    collection: 800,
    releasedOn: 2004,
  },
  {
    id: 2,
    name: "Transformers - Rise of the Beasts",
    country: "USA",
    collection: 300,
    releasedOn: 2023,
  },
  {
    id: 3,
    name: "Bahubali 1",
    country: "India",
    collection: 650,
    releasedOn: 2015,
  },
  {
    id: 4,
    name: "Bahubali 2",
    country: "India",
    collection: 450,
    releasedOn: 2017,
  },
  {
    id: 6,
    name: "Beast",
    country: "India",
    collection: 550,
    releasedOn: 2022,
  }
];

function Sort() {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("albums");

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        country: "country",
        collection: "collection",
        releasedOn: "releasedOn",
        name:"name"
      };
      const sortProperty = types[type];
      const sorted = [...movies].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <div style={{ marginTop: 100, marginLeft: 100 }}>
      <h1>SORT FILTER IN DROPDOWN</h1>
      <span style={{ marginLeft: 100 }}>Sort Movie :</span> <select        
        onChange={(e) => setSortType(e.target.value)}
        className="btn btn-dark">
        <option value="country">Country</option>
        <option value="collection">Collection</option>
        <option value="releasedOn">Release Date</option>
        <option value="name">Name</option>
      </select>

      {data.map((movie) => (
        <div
          key={movie.id}
          style={{
            margin: "30px",
            marginLeft: 350,
            borderStyle: "inset",
            borderColor: "black",
            width: 350,
            padding: 10,
          }}>
          <div>{`Movie: ${movie.name}`}</div>
          <div>{`Country: ${movie.country}`}</div>
          <div>{`Collection: ${movie.collection}`}</div>
          <div>{`Year of Release: ${movie.releasedOn}`}</div>
        </div>
      ))}
      <hr />
      <div style={{ marginTop: 100, marginLeft: 100 }}>
        <Events />
      </div>
    </div>
  );
}

export default Sort;
