import React,{useState} from "react";
import { CiUser } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Signup = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChnage = (e) => {
    setSignupData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(signupData)

  return (
    <div className=" flex justify-center items-center p-6 min-h-screen">
      <div className="max-w-[28rem] w-full bg-base-200 flex flex-col p-8 gap-5 rounded-lg  ">
        <h1 className="text-xl font-semibold">Please Signup..!!</h1>
        <label className="input validator w-full">
          <CiUser />
          <input
            type="text"
            required
            placeholder="Full Name"
            name="fullName"
            onChange={handleInputChnage}
          />
        </label>
        <label className="input validator w-full">
          <CiUser />
          <input
            type="text"
            required
            placeholder="Username"
            name="username"
            onChange={handleInputChnage}
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
        <label className="input validator w-full">
          <IoKeyOutline />
          <input
            type="password"
            required
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleInputChnage}
          />
        </label>
        <button className="btn btn-primary ">Login</button>
        <p>
          Already have an account? &nbsp;
          <Link to="/login" className="text-blue-400 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
