// import Link from "next/link";
import React from "react";

const Navbar = () => {

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/authentication/login";
    console.log("testing");
  };

  return (
    <div style={{ background: "#F9FCF8", padding: "28px 0px" }}>
      <div className="container">
        <div className=" d-flex justify-content-between align-items-center">
          <div>
            <h2 className="primary-color primary-font m-0">Job Portal</h2>
          </div>
          <div>
            <a
              className=" primary-color primary-font fs-5 text-decoration-none"
              onClick={logout}
              style={{ cursor: "pointer" }}
            >
              Log Out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
