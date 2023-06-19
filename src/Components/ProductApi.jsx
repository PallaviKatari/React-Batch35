import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign} from "@fortawesome/free-solid-svg-icons";

//Functional component - fetch all the details from fakeAPI
const UsingFetch = () => {
  const [products, setProducts] = useState([]); // empty array

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data); //fakeAPI details
        console.log(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ marginLeft: 150, marginTop: 100 }}>
      {products.length > 0 && (
        // <ul>
        //   {products.map((product) => (
        //     <li key={product.id}>{product.title}</li>
        //   ))}
        // </ul>
        <div className="row">
          {products.map((product) => (
            // map - key property is mandatory
            <div className="col-md-3" key={product.id}  style={{border:'inset',width:150,borderRadius:10,marginLeft:50,marginBottom:30}}>
              <div className="card" style={{border:'none',marginTop:10}}>
                <div className="card-head">
                  <img
                    src={product.image}
                    alt={product.title}
                    height={100}
                    width={100}
                  />
                </div>
              </div>
              <div className="card-body">{product.category}-<FontAwesomeIcon icon={faIndianRupeeSign}></FontAwesomeIcon>{product.price}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsingFetch;
