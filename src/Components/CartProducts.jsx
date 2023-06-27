import React from "react";
import data from "../data/products.json";
import { useCart } from "react-use-cart";

const CartProducts = () => {
  return (
    <>
      <h1 className="text-center mt-3" style={{ marginTop: 30 }}>
        Shopping Cart
      </h1>
      <div className="row" style={{ marginTop: 50 }}>
        {data.productData.map((item, index) => {
          return (
            <ItemCard
              img={item.image}
              title={item.title}
              desc={item.description}
              price={item.price}
              item={item}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default CartProducts;

const ItemCard = (props) => {
  const { addItem } = useCart();

  return (
    <div className="col-md-4 col-lg-6 col-sm-3" style={{ marginTop: 30 }}>
      <div className="card overflow-hidden p-3">
        <img
          src={props.img}
          className="card-img-top img-fluid"
          alt="product"
          style={{ height: 100, width: 100, marginLeft: 150 }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <h4 className="card-text">₹ {props.price}</h4>

          <button
            className="btn btn-success"
            onClick={() => addItem(props.item)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
