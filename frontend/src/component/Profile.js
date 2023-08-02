import React from "react";
import img1 from "../image/g2.jpg";
import img2 from "../image/g3.jpg";
import img3 from "../image/2 copy.jpg";
import img4 from "../image/Header.jpg";
import img5 from "../image/pic2.jpg";
import img6 from "../image/pic4.jpg";
import img7 from "../image/0.jpg";
import img8 from "../image/abbb.jpg";
import img13 from "../image/Header.jpg";
import img14 from "../image/g2.jpg";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";

const Profile = () => {
  const nav = useNavigate();
  const clickHandler4 = () => {
    nav("/About");
  };
  const clickHandler = () => {
    nav("/Home");
  };
  const clickHandler2 = () => {
    console.log("dd");
    nav("/Profile");
  };
  const clickHandler3 = () => {
    nav("/Notefcation");
  };
  const clickHandler5 = () => {
    nav("/Friends");
  };
  const clickHandler6 = () => {
    nav("/Messanger");
  };
  return (
    <div className="text-[#ffffff] bg-slate-900 tablet:mt-14">
      <div className="tablet:hidden">
        <Navbar></Navbar>
      </div>
      <div className="bg-[#1e293b] mb-[-8px] tablet:hidden">
        <div className="icone mb-2 mt-16 bg-slate-600 rounded-r-full rounded-l-full tablet:hidden flex justify-evenly items-center w-[100%]">
          <div className="flex justify-center p-2 items-center">
            <box-icon
              name="list-ul"
              color="black"
              style={{ cursor: "pointer" }}
            ></box-icon>
          </div>
          <box-icon
            name="user-circle"
            color="#4755a6"
            onClick={clickHandler2}
            style={{ cursor: "pointer" }}
          ></box-icon>
          <box-icon
            style={{ cursor: "pointer" }}
            name="bell"
            type="solid"
            color="black"
            animation="tada"
            onClick={clickHandler3}
          ></box-icon>
          <box-icon
            type="logo"
            style={{ cursor: "pointer" }}
            color="black"
            name="messenger"
            onClick={clickHandler6}
          ></box-icon>
          <box-icon
            style={{ cursor: "pointer" }}
            name="tv"
            color="black"
          ></box-icon>
          <box-icon
            style={{ cursor: "pointer" }}
            name="group"
            onClick={clickHandler5}
            type="solid"
            color="black"
          ></box-icon>
          <box-icon
            style={{ cursor: "pointer" }}
            name="home"
            onClick={clickHandler}
            color="black"
          ></box-icon>
        </div>
      </div>
      <div className="tablet:w-[70%] tablet:m-auto bg-[#1e293b]">
        <img class="w-full object-cover h-80 tablet:h-96" src={img13} alt="" />
        <img
          class="w-52 absolute top-80 left-[25%] border-4 border-[black] rounded-full tablet:left-[70%]
         tablet:top-[50%]"
          src={img14}
          alt=""
        />
        <div
          class=" absolute top-[540px] left-[17%] font-extrabold text-2xl flex flex-col items-center
       tablet:left-[50%] tablet:top-[70%] tablet:space-y-5"
        >
          <p>Saeed Koja</p>
          <p class="text-lg mr-2 flex items-center font-medium">
            "!وبكلمة بتكسر روح
            <box-icon name="heart" type="solid" color="#878cb5"></box-icon>
            ...بكلمة بتخلق بسمة"
          </p>
        </div>
        <div class="text-xl font-bold flex justify-end flex-col items-end mt-56 mr-5">
          <p class="flex items-center mb-2">-Saeed-</p>
          <p class="mb-2">syrian_homs</p>
          <p class="mb-2 flex items-center">
            <box-icon name="mobile-alt"></box-icon> It Engineer
          </p>
          <p class="mb-2 flex items-center">
            <box-icon name="sun" color="#bfce5b"></box-icon> always be a
            different shining light
          </p>
        </div>
        <div class="h-20 flex items-center justify-evenly mt-5">
          <div class="rounded-full w-16 bg-slate-600 h-16 px-4 flex justify-center items-center">
            <box-icon name="dots-horizontal-rounded" color="#ffffff"></box-icon>
          </div>
          <div
            onClick={clickHandler4}
            class="rounded-l-full cursor-pointer rounded-r-full w-[45%] bg-slate-600 h-16 px-4 flex flex-col justify-center
         items-center tablet:flex-row-reverse tablet:justify-between tablet: text-center tablet:items-center
          tablet:px-20 tablet:text-2xl "
          >
            تعديل الملف الشخصي
            <box-icon name="edit-alt" color="#ffffff" type="solid"></box-icon>
          </div>
          <div class="rounded-full flex justify-center items-center w-[30%] rounded-l-full rounded-r-full bg-slate-600 text-center h-16 px-4 tablet:text-center tablet:text-2xl ">
            إضافة إلى القصة
          </div>
        </div>
        <div class="flex flex-wrap w-[]">
          <img class="h-32 w-28 p-2 rounded-3xl" src={img1} alt="" />
          <img class="h-32 w-28 p-2 rounded-3xl" src={img2} alt="" />
          <img class="h-32 w-28 p-2 rounded-3xl" src={img3} alt="" />
          <img class="h-32 w-28 p-2 rounded-3xl" src={img4} alt="" />
          <div class="hidden tablet:flex">
            <img class="h-32 w-28 p-2 rounded-3xl" src={img5} alt="" />
            <img class="h-32 w-28 p-2 rounded-3xl" src={img6} alt="" />
            <img class="h-32 w-28 p-2 rounded-3xl" src={img7} alt="" />
            <img class="h-32 w-28 p-2 rounded-3xl" src={img8} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
