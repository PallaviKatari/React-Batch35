import React, { useState, useEffect } from "react";

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
    name: "Bahubali",
    country: "India",
    collection: 650,
    releasedOn: 2015,
  },
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
    <div style={{ marginTop: 100, marginBottom: 100 }}>
      <select
        style={{ marginLeft: 150 }}
        onChange={(e) => setSortType(e.target.value)}
        className="btn btn-dark">
        <option value="country">Country</option>
        <option value="collection">Collection</option>
        <option value="releasedOn">Release Date</option>
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
    </div>
  );
}

export default Sort;


