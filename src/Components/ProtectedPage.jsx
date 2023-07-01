import React from "react";
import { fakeAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

const ProtectedPage = ({ name }) => {
  const navigate = useNavigate();

  return (
    <div style={{float:"right"}}>
      <p style={{ fontSize: 21}}>
        Welcome back {name}
      </p>
      <button
      className="btn btn-warning"
        style={{ color: "black", fontSize: 21 }}
        onClick={() => {
          fakeAuth.logout(() =>
            navigate("/login", { state: { from: { pathname: "/" } } })
          );
        }}>
        Log out
      </button>
    </div>
  );
};

export default ProtectedPage;
