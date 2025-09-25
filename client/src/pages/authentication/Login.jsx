import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Login = () => {

  const [loginData, setLoginData] = useState({
    username: "",
    passwoed: "",
  });

  const handleInputChnage = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 

  return (
    <div className=" flex justify-center items-center p-6 min-h-screen">
      <div className="max-w-[28rem] w-full bg-base-200 flex flex-col p-8 gap-5 rounded-lg  ">
        <h1 className="text-xl font-semibold">Please Login..!!</h1>
        <label className="input validator w-full">
          <CiUser />
          <input
            type="text"
            required
            placeholder="Username"
            onChange={handleInputChnage}
            name="usename"
          />
        </label>

        <label className="input validator w-full">
          <IoKeyOutline />
          <input
            type="password"
            required
            placeholder="Password"
            name="password"
            onChange={handleInputChnage}
          />
        </label>
        <button className="btn btn-primary ">Login</button>
        <p>
          Don't havw an account? &nbsp;
          <Link to="/signup" className="text-blue-400 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
