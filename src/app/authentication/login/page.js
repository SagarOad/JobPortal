"use client";

import React, { useState } from "react";
import { useAuth } from "./Context/auth";
import mail from "../../../assets/mail.png";
import logo from "../../../assets/logo.png";
import Image from "next/image";

// SVG for open eye icon
const OpenEyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);

// SVG for closed eye icon
const ClosedEyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
    />
  </svg>
);

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(username, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div style={{background: "#F9FCF8"}} className="position-relative">
      <div className="d-flex w-100 main-page">
        <div className="position-absolute d-md-block d-none logo-container">
          <Image className="" src={logo} alt="logo" />
        </div>
        <div className="w-md-50 w-100 flex align-content-center">
          <div className="login-form-container">
            <form onSubmit={handleSubmit}>
              <h2 className="primary-font primary-color fw-normal">
                Join our job portal
              </h2>
              <p className="primary-font primary-color fs-5">
                Job seekers apply. Employers post, search, manage.
              </p>
              <div data-mdb-input-init className="form-outline mb-4">
                <div className="input-group">
                  <div className="input-group-text border-top-0 border-start-0">
                    <Image src={mail} alt="mail" />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    id="form2Example1"
                    className="form-control bg-transparent myInput shadow-none p-3"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <div className="input-group">
                  <div className="input-group-text border-top-0 border-start-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                      />
                    </svg>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="form2Example2"
                    placeholder="Enter your password"
                    className="form-control bg-transparent myInput bg-dark shadow-none p-3"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                  style={{borderRight: "none", borderTop: "none"}}
                    className="input-group-text"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <ClosedEyeIcon /> : <OpenEyeIcon />}
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form2Example31"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="form2Example31"
                    >
                      Accept terms and conditions
                    </label>
                  </div>
                </div>

                <div>
                  <a className="primary-color primary-font" href="#!">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-4">
                <div>
                  <button className="primary-button" type="submit">
                    Log-In
                  </button>
                </div>

                <div>
                  <a className="primary-color primary-font" href="#!">
                    Register a new account
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-md-50 w-100 login-bg d-flex justify-content-center align-items-end">
          <div className=" ">
            <h2 style={{ color: "white" }} className=" fs-1 pb-5 primary-font">
              Here, you can find the right fit for your career or hire talent
              that fits your company's requirements.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
