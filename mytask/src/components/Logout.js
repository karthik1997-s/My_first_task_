import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigateLogin = useNavigate();
  const logout = () => {
    navigateLogin("/");
  };
  return (
    <>
      <Button
        type="link"
        danger
        onClick={logout}
        style={{
          float: "right",
          background: "#fff",
          width: "150px",
          height: "40px",
          marginTop: "10px",
        }}
      >
        Logout
      </Button>
    </>
  );
}

export default Logout;
