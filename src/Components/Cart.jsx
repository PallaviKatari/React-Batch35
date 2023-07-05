import React,{useState} from "react";
//npm install react-use-cart
import { useCart } from "react-use-cart";
const Swal = require("sweetalert2");
const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  let paymentHandler="";

  //When testing interactively, use a card number, such as 4242 4242 4242 4242.
  //Enter the card number in the Dashboard or in any payment form.
  //se a valid future date, such as 12/34.
  //Use any three-digit CVC (four digits for American Express cards).
  //function makePayment(amount) {
  function makePayment() {
    invokeStripe();
  paymentHandler = window.StripeCheckout.configure({
      key: "pk_test_51Kb7TuSGj6LZeNumr4WWZQlyT0VAdXUwQ0zPIJAmGbnt9MAwXkJ5aIfQOZsCPraDu1L2BxAyRb8jLSF5tB6fL8mO00Yw0HiRYf",
      locale: "auto",
      token: function (stripeToken) {
        console.log(stripeToken);
        //alert('Stripe token generated!');
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: "success",
          title: "Order Placed Successfully",
        });
      },
    });
    paymentHandler.open({
      name: "Course",
      description: "Order Details",
      //amount: amount,
    });
  }

  function invokeStripe() {
    if (!window.document.getElementById("stripe-script")) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onClick = () => {
     paymentHandler = window.StripeCheckout.configure({
          key: "pk_test_51Kb7TuSGj6LZeNumr4WWZQlyT0VAdXUwQ0zPIJAmGbnt9MAwXkJ5aIfQOZsCPraDu1L2BxAyRb8jLSF5tB6fL8mO00Yw0HiRYf",
          locale: "auto",
          token: function (stripeToken) {
            console.log(stripeToken);
            const Toast = Swal.mixin({
              toast: true,
              position: "top",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });

            Toast.fire({
              icon: "error",
              title: "Error in generating Stripe Payment Gateway",
            });
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }

  if (isEmpty)
    return (
      <h1 className="text-center" style={{ marginTop: 100 }}>
        Cart is Empty
      </h1>
    );
  return (
    <div className="row justify-content-center">
      <div className="col-12">
        <h5>
          Cart ({totalUniqueItems}) total Items: ({totalItems})
        </h5>
        <br />
        <table className="table table-light table-hover m-0">
          <tbody>
            <tr>
              <td style={{ padding: "0px 100px 0px 10px" }}>
                <b>Product</b>
              </td>
              <td style={{ padding: "0px 100px 0px 10px" }}>
                <b>Name</b>
              </td>
              <td style={{ padding: "0px 50px 0px 0px" }}>
                <b>Price</b>
              </td>
              <td style={{ padding: "0px 50px 0px 0px" }}>
                <b>Quantity</b>
              </td>
            </tr>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={item.image} style={{ height: "6rem" }} alt="" />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td> {item.quantity}</td>
                  <td>
                    <button
                      style={{ border: "2px solid red" }}
                      className="btn btn-light ms-2"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }>
                      –
                    </button>
                    <button
                      style={{ border: "2px solid #fcba03" }}
                      className="btn btn-light ms-2"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }>
                      +
                    </button>
                    <button
                      className="btn btn-dark ms-2"
                      onClick={() => removeItem(item.id)}>
                      Remove Item
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <hr />
      <br />
      {/* <div> */}
      <div className="col-auto ms-auto">
        <h3>Total Price: Rs. {cartTotal}</h3>
      </div>
      <div className="col-auto ms-auto">
        <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
          Clear Cart
        </button>
        <button className="btn btn-primary m-2" onClick={makePayment}>
          Pay Now
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Cart;
