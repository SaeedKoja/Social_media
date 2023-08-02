import React from "react";
import img from "../image/10.jpg";
import img2 from "../image/g3.jpg";
import img3 from "../image/1.jpg";
import img4 from "../image/pic2.jpg";
import img5 from "../image/10.jpg";
import img6 from "../image/pic4.jpg";
import img7 from "../image/g3.jpg";
import img8 from "../image/12.jpg";
import img9 from "../image/15.jpg";
import img10 from "../image/15.jpg";
import { useNavigate } from "react-router";
import img11 from "../image/17.jpg";
import img12 from "../image/18.jpg";
import img13 from "../image/14.jpg";
import img14 from "../image/600.jpg";

const Messanger = () => {
  const nav = useNavigate();
  const clickHandler2 = () => {
    nav("/Friends");
  };
  const clickHandler = () => {
    console.log("dd");
    nav("/Profile");
  };
  const clickHandler3 = () => {
    nav("/Notefcation");
  };
  const clickHandler4 = () => {
    nav("/Home");
  };
  const clickHandler5 = () => {
    nav("/Messanger");
  };
  return (
    <div className="mt-16 text-[#ffffff] tablet:bg-slate-900">
      <div className="tablet:w-[70%] bg-[#1e293b] m-auto">
        <div className=" mb-2 mt-1 bg-slate-600 rounded-r-full rounded-l-full tablet:hidden flex justify-evenly items-center w-[100%]">
          <div className="flex justify-center p-2 items-center">
            <box-icon
              name="list-ul"
              color="black"
              style={{ cursor: "pointer" }}
            ></box-icon>
          </div>
          <box-icon
            name="user-circle"
            onClick={clickHandler}
            color="black"
            style={{ cursor: "pointer" }}
          ></box-icon>
          <box-icon
            style={{ cursor: "pointer" }}
            onClick={clickHandler3}
            name="bell"
            type="solid"
            color="black"
            animation="tada"
          ></box-icon>
          <box-icon
            type="logo"
            style={{ cursor: "pointer" }}
            color="#4755a6"
            onClick={clickHandler5}
            name="messenger"
          ></box-icon>
          <box-icon
            style={{ cursor: "pointer" }}
            name="tv"
            color="black"
          ></box-icon>
          <box-icon
            style={{ cursor: "pointer" }}
            name="group"
            onClick={clickHandler2}
            type="solid"
            color="black"
          ></box-icon>
          <box-icon
            style={{ cursor: "pointer" }}
            name="home"
            onClick={clickHandler4}
            color="black"
          ></box-icon>
        </div>
        <div className="flex justify-between items-center pt-2 px-3">
          <div className="flex justify-between items-center w-[30%] tablet:w-[20%]">
            <box-icon name="menu" color="#ffffff"></box-icon>
            <p className="text-lg">الدردشات</p>
          </div>
          <div className="flex justify-between items-center w-[25%] tablet:w-[18%]">
            <box-icon name="camera" type="solid" color="#ffffff"></box-icon>
            <box-icon name="edit-alt" color="#ffffff" type="solid"></box-icon>
          </div>
        </div>
        <div className="searsh px-2 mt-4 relative ">
          <box-icon
            style={{ position: "absolute", top: "23%", left: "2%" }}
            name="search-alt"
            color="#ffffff"
          ></box-icon>
          <input
            type="text"
            className="text-slate-50 outline-none bg-slate-600 focus:outline-none w-full h-[40px] tablet:h-[45px] rounded-[30px] py-[10px] pr-[20px] pl-[45px] placeholder:text-stone-300 "
            placeholder="Search in messanger"
          />
        </div>
        <div className="flex px-2 mt-3 justify-between items-center">
          <div className="flex flex-col items-center">
            <div className="w-14 flex justify-center items-center h-14 bg-slate-600 rounded-full">
              <box-icon name="video-plus" color="#ffffff"></box-icon>
            </div>
            <p className="text-sm w-8 text-center">بدء المكالمة</p>
          </div>
          <div className="flex flex-col items-center relative">
            <div className="w-3 h-3 absolute left-0 top-10 border border-black bg-[green] rounded-full"></div>
            <img src={img} alt="" className="w-14 h-14 rounded-full" />
            <p className="text-sm w-10 text-center">Yara Omran</p>
          </div>
          <div className=" flex-col items-center relative hidden tablet:flex">
            <div className="w-3 h-3 absolute left-0 top-10 border border-black bg-[green] rounded-full"></div>
            <img src={img11} alt="" className="w-14 h-14 rounded-full" />
            <p className="text-sm w-10 text-center">Sedra Na</p>
          </div>
          <div className="flex flex-col items-center relative">
            <div className="w-3 h-3 absolute left-0 top-10 border border-black bg-[green] rounded-full"></div>
            <img src={img12} alt="" className="w-14 h-14 rounded-full" />
            <p className="text-sm w-10 text-center">Samer Sh</p>
          </div>
          <div className="hidden tablet:flex flex-col items-center relative">
            <div className="w-3 h-3 absolute left-0 top-10 border border-black bg-[green] rounded-full"></div>
            <img src={img13} alt="" className="w-14 h-14 rounded-full" />
            <p className="text-sm w-10 text-center">Sara Tr</p>
          </div>
          <div className="hidden tablet:flex flex-col items-center relative">
            <div className="w-3 h-3 absolute left-0 top-10 border border-black bg-[green] rounded-full"></div>
            <img src={img14} alt="" className="w-14 h-14 rounded-full" />
            <p className="text-sm w-10 text-center">Reem Kh</p>
          </div>
          <div className="hidden tablet:flex flex-col items-center relative ">
            <div className="w-3 h-3 absolute left-0 top-10 border border-black bg-[green] rounded-full"></div>
            <img src={img2} alt="" className="w-14 h-14 rounded-full" />
            <p className="text-sm w-10 text-center">Morad Essa</p>
          </div>
          <div className="flex flex-col items-center relative">
            <div className="w-3 h-3 absolute left-0 top-10 border border-black bg-[green] rounded-full"></div>
            <img src={img3} alt="" className="w-14 h-14 rounded-full" />
            <p className="text-sm w-10 text-center">Sara Sh</p>
          </div>
          <div className="flex flex-col items-center relative">
            <div className="w-3 h-3 absolute left-0 top-10 border border-black bg-[green] rounded-full"></div>
            <img src={img4} alt="" className="w-14 h-14 rounded-full" />
            <p className="text-sm w-10 text-center">Khaled Gh</p>
          </div>
        </div>
        <div className="mt-4 px-3">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center relative">
              <img
                className="w-14 h-14 rounded-full mr-3"
                src={img5}
                alt=""
              ></img>
              <div className="w-3 h-3 absolute left-0 top-10 border border-black bg-[green] rounded-full"></div>
              <div className="flex flex-col justify-between h-[44px]">
                <p className="text-sm">Yara Omran</p>
                <div className="flex items-center">
                  <p className="text-xs mr-4">انت : ماشي</p>
                  <p dir="ltr" className="text-xs ">
                    8:19 pm{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="h-5 border border-stone-400 w-5 bg-slate-600 rounded-full flex justify-center items-center">
              <box-icon name="check" color="#ffffff"></box-icon>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center relative">
              <img
                className="w-14 h-14 rounded-full mr-3"
                src={img6}
                alt=""
              ></img>
              <div className="flex flex-col justify-between h-[44px]">
                <p className="text-sm">Yahya Awad</p>
                <div className="flex items-center">
                  <p className="text-xs mr-4">طيب</p>
                  <p dir="ltr" className="text-xs ">
                    7:13 pm{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center relative">
              <img
                className="w-14 h-14 rounded-full mr-3"
                src={img7}
                alt=""
              ></img>
              <div className="flex flex-col justify-between h-[44px]">
                <p className="text-sm">Ahmad Saady</p>
                <div className="flex items-center">
                  <p className="text-xs mr-4">انت : طيب</p>
                  <p dir="rtl" className="text-xs ">
                    Yesturday
                  </p>
                </div>
              </div>
            </div>
            <div className="h-5 border border-stone-400 w-5 rounded-full flex justify-center items-center">
              <box-icon name="check" color="#ffffff"></box-icon>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center relative">
              <img
                className="w-14 h-14 rounded-full mr-3"
                src={img8}
                alt=""
              ></img>
              <div className="w-3 h-3 absolute left-0 top-10 border border-black bg-[green] rounded-full"></div>
              <div className="flex flex-col justify-between h-[44px]">
                <p className="text-sm">Yara Omran</p>
                <div className="flex items-center">
                  <p className="text-xs mr-4" dir="rtl">
                    انت : ....
                  </p>
                  <p dir="ltr" className="text-xs ">
                    29 novamber
                  </p>
                </div>
              </div>
            </div>
            <div className="h-5 border border-stone-400 w-5 bg-slate-600 rounded-full flex justify-center items-center">
              <box-icon name="check" color="#ffffff"></box-icon>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center relative">
              <img
                className="w-14 h-14 rounded-full mr-3"
                src={img9}
                alt=""
              ></img>
              <div className="w-3 h-3 absolute left-0 top-10 border border-black bg-[green] rounded-full"></div>
              <div className="flex flex-col justify-between h-[44px]">
                <p className="text-sm">Rama Sh</p>
                <div className="flex items-center">
                  <p className="text-xs mr-4">انت : أوك </p>
                  <p className="text-xs ">27 novamber</p>
                </div>
              </div>
            </div>
            <img src={img10} alt="" className="h-5 w-5 rounded-full" />
            {/* <div className="h-5 border border-stone-400 w-5 bg-slate-600 rounded-full flex justify-center items-center">
            <box-icon name="check" color="#ffffff"></box-icon>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messanger;
