import React from "react";
import SideBar from "./SideBar";
import MessageBox from "./MessageBox";

const Home = () => {
  return (
    <div className="flex h-screen  ">
      <SideBar />
      <MessageBox />
    </div>
  );
};

export default Home;
