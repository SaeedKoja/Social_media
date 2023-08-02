import React from "react";
import img from "../image/12.jpg";
import img2 from "../image/2.jpg";
import img3 from "../image/17.jpg";
import img4 from "../image/18.jpg";
import Navbar from "./Navbar";
import { useNavigate } from "react-router";

const Friends = () => {
  const nav = useNavigate();
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
  const clickHandler4 = () => {
    nav("/Messanger");
  };
  return (
    <div className="text-[#ffffff] tablet:bg-slate-900 tablet:mt-14">
      <div className="tablet:hidden">
        <Navbar></Navbar>
      </div>
      <div className="tablet:w-[70%] tablet:bg-[#1e293b] tablet:m-auto mt-6 pb-5 pt-5 tablet:py-4">
        <div className="icone mb-2 mt-5 bg-slate-600 rounded-r-full rounded-l-full tablet:hidden flex justify-evenly items-center w-[100%]">
          <div className="flex justify-center p-2 items-center">
            <box-icon
              name="list-ul"
              color="black"
              style={{ cursor: "pointer" }}
            ></box-icon>
          </div>
          <box-icon
            name="user-circle"
            color="black"
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
            onClick={clickHandler4}
          ></box-icon>
          <box-icon
            style={{ cursor: "pointer" }}
            name="tv"
            color="black"
          ></box-icon>
          <box-icon
            style={{ cursor: "pointer" }}
            name="group"
            type="solid"
            color="#4755a6"
          ></box-icon>
          <box-icon
            style={{ cursor: "pointer" }}
            name="home"
            onClick={clickHandler}
            color="black"
          ></box-icon>
        </div>
        <div class=" flex  justify-between px-4 tablet:px-8 mt-4 ">
          <box-icon
            class="items-start"
            name="search"
            color="#ffffff"
          ></box-icon>
          <h3 class="font-bold font-serif ">الأصدقاء</h3>
        </div>
        <div class="h-18 flex justify-end items-end px-4 space-x-4 py-5  tablet:flex  tablet:justify-end tablet:place-items-center">
          <div class="rounded-l-full rounded-r-full w-[25%] bg-slate-900 h-9 px-15 flex items-center p-4 tablet:p-6 font-bold font-serif tablet:flex justify-center tablet:items-center tablet:text-center ">
            أصدقائك
          </div>
          <div class="rounded-l-full rounded-r-full w-[25%] bg-slate-900 h-9 px-15 flex items-center p-4 font-bold tablet:p-6 font-serif tablet:flex justify-center tablet:items-center tablet:text-center">
            الاقتراحات
          </div>
        </div>
        <hr className="border-stone-500 mb-4"></hr>
        <div class="py-5"></div>
        <div class=" flex justify-between space-x-3 ">
          <div class=" font-serif text-sm ml-4">عرض الكل</div>
          <div class="flex justify-evenly px-6 space-x-2">
            {" "}
            <p class="font-bold text-red-600 ">456</p>
            <p class="font-bold font-serif px-1">طلبات الصداقة</p>{" "}
          </div>
        </div>
        <div class="py-4"></div>
        <div class=" h-60">
          <div class=" flex justify-between items-center pl-2">
            <p class="font-thin py-6 px-3 text-sm text-stone-400">2 Hour</p>
            <div className="flex items-center justify-between tablet:justify-end w-[60%]">
              <p class="py-6 px-3 font-bold font-serif">Raghad Alomar</p>
              <img class="rounded-full h-16 mr-4" src={img2} alt="" />
            </div>
          </div>
          <div class="flex justify-end px-20 space-x-5">
            <div class="rounded-l-full flex justify-center items-center rounded-r-full w-[30%] bg-slate-600 h-8 text-[black] tablet:h-12 text-center font-bold">
              حذف
            </div>
            <div class="rounded-l-full flex justify-center items-center rounded-r-full w-[30%] bg-slate-900 h-8 tablet:h-12 text-center font-bold">
              تأكيد
            </div>
          </div>
          <div class=" flex justify-between items-center pl-2">
            <p class="font-thin py-6 px-3 text-sm text-stone-400">6 Week</p>
            <div className="flex items-center justify-end w-[60%]">
              <p class="py-6 px-3 font-bold font-serif">أحمد الابراهيم</p>
              <img
                class=" rounded-full  h-20 px-3 py-3 w-20"
                src={img3}
                alt=""
              />
            </div>
          </div>
          <div class="flex justify-end px-20 space-x-5">
            <div class="rounded-l-full flex justify-center items-center rounded-r-full w-[30%] bg-slate-600 h-8 text-[black] tablet:h-12 text-center font-bold">
              حذف
            </div>
            <div class="rounded-l-full flex justify-center items-center rounded-r-full w-[30%] bg-slate-900 h-8 tablet:h-12 text-center font-bold">
              تأكيد
            </div>
          </div>
        </div>
        <div class=" h-60">
          <div class=" flex justify-between items-center pl-2">
            <p class="font-thin py-6 px-3 text-stone-400 text-sm">1 Year</p>
            <div className="flex items-center justify-end w-[60%]">
              <p class="py-6 px-3 font-bold font-serif">سيدرا المحمد</p>
              <img class="rounded-full h-20 px-2 py-3 w-25" src={img} alt="" />
            </div>
          </div>
          <div class="flex justify-end px-20 space-x-5">
            <div class="rounded-l-full flex justify-center items-center rounded-r-full w-[30%] bg-slate-600 h-8 text-[black] tablet:h-12 text-center font-bold">
              حذف
            </div>
            <div class="rounded-l-full flex justify-center items-center rounded-r-full w-[30%] bg-slate-900 h-8 tablet:h-12 text-center font-bold">
              تأكيد
            </div>
          </div>
          <div class=" flex justify-between items-center pl-2">
            <p class="font-thin py-6 px-3 text-stone-400 text-sm">2 Hour</p>
            <div className="flex items-center tablet:justify-end justify-between w-[55%]">
              <p class="py-6 font-bold font-serif"> Gadeer AL-ali</p>
              <img
                class=" rounded-full  h-20 px-3 py-3 w-20"
                src={img4}
                alt=""
              />
            </div>
          </div>
          <div class="flex justify-end px-20 space-x-5">
            <div class="rounded-l-full flex justify-center items-center rounded-r-full w-[30%] bg-slate-600 h-8 text-[black] tablet:h-12 text-center font-bold">
              حذف
            </div>
            <div class="rounded-l-full flex justify-center items-center rounded-r-full w-[30%] bg-slate-900 h-8 tablet:h-12 text-center font-bold">
              تأكيد
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 h-4 w-4 bg-slate-700"></div>
    </div>
  );
};

export default Friends;
