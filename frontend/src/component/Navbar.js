import React, { useState } from "react";
// import logo from "../image/pic4.jpg";
import "./Navbar.css";
import { useNavigate } from "react-router";
import Notefcation from "./Notefcation";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [colorHome,setColorHome] = useState(true);
  const [colorfriend,setColorfriend] = useState(false);
  const [colorMs,setColorMs] = useState(false);
  const [colorNot,setColorNot] = useState(false);
  const [colorProf,setColorProf] = useState(false);

  const nav = useNavigate();
  const clickHandler3 = () => {
    setColorProf(false)
    setColorHome(false)
    setColorMs(false)
    setColorNot(false)
    setColorfriend(false)
    setShow((prev)=>{return !prev});
  };
  console.log(show);

  const clickHandler2 = () => {
    setColorProf(false)
    setColorHome(false)
    setColorMs(false)
    setColorNot(false)
    setColorfriend(true)
    nav("/Friends");
  };
  const clickHandler4 = () => {
    setColorProf(false)
    setColorHome(true)
    setColorMs(false)
    setColorNot(false)
    setColorfriend(false)
    nav("/Home");
  };
  const clickHandler5 = () => {
    setColorProf(false)
    setColorHome(false)
    setColorMs(true)
    setColorNot(false)
    setColorfriend(false)
    nav("/Messanger");
  }

  const clickHandler = () => {
    setColorProf(true)
    setColorHome(false)
    setColorMs(false)
    setColorNot(false)
    setColorfriend(false)
    nav("/Profile");
  };
  return (
    <div className="Navbar fixed top-0 z-[100] bg-slate-900 shadow-lg w-full">
      <div className="container p-4 tablet:p-0 tablet:pl-10">
        <div className="content-navbar w-full flex justify-between items-center h-[25px] tablet:h-[60px]">
          <div className="logo">
            <h3 className=" text-slate-50 text-2xl tablet:text-3xl font-semibold">
              facebook
            </h3>
          </div>
          <div className="tablet:flex tablet:justify-between  w-[66%]">
            <div className="icone hidden tablet:flex tablet:justify-between tablet:items-center tablet:w-[50%]">
              <box-icon
                name="user-circle"
                onClick={clickHandler}
                color= {colorProf ? "#4755a6" : "#ffffff"}
                style={{ cursor: "pointer" }}
              ></box-icon>
              <div
                onClick={clickHandler3}
                className="flex justify-center items-center"
              >
                <box-icon
                  style={{ cursor: "pointer" }}
                  name="bell"
                  type="solid"
                  color={show ? "#4755a6" : "#ffffff"}
                  animation="tada"
                ></box-icon>
              </div>
              <box-icon
                type="logo"
                style={{ cursor: "pointer" }}
                color={colorMs ? "#4755a6" : "#ffffff"}
                onClick={clickHandler5}
                name="messenger"
              ></box-icon>
              <box-icon
                style={{ cursor: "pointer" }}
                name="tv"
                color="#ffffff"
              ></box-icon>
              <box-icon
                style={{ cursor: "pointer" }}
                name="group"
                onClick={clickHandler2}
                type="solid"
                color={colorfriend ? "#4755a6" : "#ffffff"}
              ></box-icon>
              <box-icon
                style={{ cursor: "pointer" }}
                name="home"
                onClick={clickHandler4}
                color={colorHome ? "#4755a6" : "#ffffff"}
              ></box-icon>
            </div>
            <div className="searsh relative tablet:w-[25%]">
              <box-icon
                style={{ position: "absolute", top: "21%", left: "4%" }}
                name="search-alt"
                color="#ffffff"
              ></box-icon>
              <input
                type="text"
                className="text-slate-50 focus:outline-none w-full h-[40px] tablet:h-[45px] rounded-[30px] py-[10px] pr-[20px] pl-[45px] bg-transparent border border-solid"
                placeholder="Search in facebook"
              />
            </div>
          </div>
          <div className="hidden tablet:block tablet:absolute tablet:top-[28%] tablet:left-[97%]">
            <box-icon
              name="facebook-circle"
              type="logo"
              style={{ position: "absolute", top: "28%", left: "97%" }}
              color="blue"
            ></box-icon>
          </div>
        </div>
      </div>
      {show && (
        <div className="w-[350px] absolute h-[400px] scrollbar bg-[#1e293b] top-14 rounded-3xl left-96 px-4 border-2 border-slate-700">
          <Notefcation></Notefcation>
        </div>
      )}
    </div>
  );
};

export default Navbar;
