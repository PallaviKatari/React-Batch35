import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fakeAuth } from "./Auth";

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  console.log({ location });

  let { from } = location.state || { from: { pathname: "/" } };
  console.log(from);
  let login = () => {
    fakeAuth.login(() => {
      navigate(from);
    });
  };

  return (
    <div style={{ marginLeft: 200 ,marginTop:100}}>
      <p style={{ color: "black", fontSize: 21 }}>
        You must log in to view the page at {from.pathname}
      </p>
      <button
        onClick={login}
        className="btn btn-success"
        style={{
          color: "black",
          fontSize: 21,
        }}>
        Log in
      </button>
    </div>
  );
}

export default LoginPage;
