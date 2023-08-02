import React from "react";
import 'boxicons'
import MainPosts from "../MainPosts";
import { useNavigate } from "react-router";

const Center = () => {
  const nav = useNavigate();
  const clickHandler2 = () => {
    nav('/Friends')
  }
  const clickHandler = () => {
    console.log('dd')
    nav('/Profile')
  }
  const clickHandler3 = () => {
    nav('/Notefcation')
  }
  const clickHandler4 = () => {
    nav('/Home')
  }
  const clickHandler5 = () => {
    nav('/Messanger')
  }
  return (
    <div className="Center h-[85vh] tablet:h-[91vh] w-full tablet:w-[45%] tablet:my-5">
        <div className="icone mb-2 mt-1 bg-slate-600 rounded-r-full rounded-l-full tablet:hidden flex justify-evenly items-center w-[100%]">
          <div className="flex justify-center p-2 items-center"><box-icon name='list-ul' color='black' style={{cursor: "pointer"}}></box-icon></div>
          <box-icon name='user-circle' onClick={clickHandler} color='black' style={{cursor: "pointer"}}></box-icon>
            <box-icon
              style={{ cursor: "pointer" }}
              onClick={clickHandler3}
              name="bell"
              type="solid"
              color="black"
              animation="tada"
            ></box-icon>
          <box-icon type='logo' style={{cursor: "pointer"}} color="black" onClick={clickHandler5} name='messenger'></box-icon>
            <box-icon style={{cursor: "pointer"}} name="tv" color="black"></box-icon>
            <box-icon style={{cursor: "pointer"}} name='group' onClick={clickHandler2} type='solid' color='black'></box-icon>
          <box-icon style={{cursor: "pointer"}} name='home' onClick={clickHandler4} color='#4755a6'></box-icon>
          </div>
      <div className="stories flex justify-evenly items-center">
        <div
          className="stories-box hidden mr-3 tablet:flex flex-col justify-end relative bg-[url('/src/image/pic4.jpg')] bg-no-repeat h-[150px] w-[150px] rounded-xl bg-contain"
        >
          <div className="stories-footer rounded-b-xl  bottom-0  w-full text-2xl text-stone-50 h-[61px] bg-slate-900">
            <h4 className="text-center text-[15px] pb-2 flex justify-center h-full  items-center m-0">
              Khaled Sh 
            </h4>
          </div>
        </div>
        <div
          className="stories-box hidden mr-3 tablet:flex flex-col justify-end relative bg-[url('/src/image/g3.jpg')] bg-no-repeat h-[150px] w-[150px] rounded-xl bg-contain"
        >
          <div className="stories-footer rounded-b-xl  bottom-0  w-full text-2xl text-stone-50 h-[61px] bg-slate-900">
            <h4 className="text-center text-[15px] pb-2 flex justify-center h-full  items-center m-0">
              Belal Refaie 
            </h4>
          </div>
        </div>
        <div
          className="stories-box  mr-3 flex flex-col justify-end relative bg-[url('/src/image/3.jpg')] bg-no-repeat h-[150px] w-[150px] rounded-xl bg-contain"
        >
          <div className="stories-footer rounded-b-xl  bottom-0  w-full text-2xl text-stone-50 h-[67px] tablet:h-[61px] bg-slate-900">
            <h4 className="text-center text-[15px] pb-2 flex justify-center h-full  items-center m-0">
              yara Na
            </h4>
          </div>
        </div>
        <div
          className="stories-box  mr-3 flex flex-col justify-end relative bg-[url('/src/image/pic2.jpg')] bg-no-repeat h-[150px] w-[150px] rounded-xl bg-contain"
        >
          <div className="stories-footer rounded-b-xl  bottom-0  w-full text-2xl text-stone-50 h-[67px] tablet:h-[61px] bg-slate-900">
            <h4 className="text-center text-[15px] pb-2 flex justify-center h-full  items-center m-0">
              Mohammad 
            </h4>
          </div>
        </div>
        <div
          className="stories-box  mr-3 flex flex-col justify-end relative bg-[url('/src/image/pic3.jpg')] bg-no-repeat h-[150px] w-[150px] rounded-xl bg-contain"
        >
          <div className="stories-footer rounded-b-xl  bottom-0  w-full text-2xl text-stone-50 h-[67px] tablet:h-[61px] bg-slate-900">
            <h4 className="text-center text-[15px] pb-2 flex justify-center h-full  items-center m-0">
              Sara Gh 
            </h4>
          </div>
        </div>
        <div
          className="stories-box flex flex-col justify-end relative bg-slate-400 h-[150px] w-[150px] rounded-xl"
        >
          <div className="icon-create flex justify-center items-center w-[50px] h-[50px] rounded-[50%] bg-slate-800 absolute bottom-[8%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <label className="text-slate-50 cursor-pointer bg-slate-900 h-[40px] w-[40px] rounded-[50%] text-center text-[25px]">
              +
            </label>
          </div>
          <div className="stories-footer rounded-b-lg  bottom-0  w-full text-2xl text-stone-50 h-[55px] bg-slate-900">
            <h4 className="text-center text-[15px] pb-2 flex justify-center h-full  items-end m-0">
              انشاء قصة
            </h4>
          </div>
        </div>
      </div>
      <MainPosts></MainPosts>
    </div>
  );
};

export default Center;
