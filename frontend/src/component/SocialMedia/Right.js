import React, { useState } from "react";
import "boxicons";
import img from "../../image/pic4.jpg";
import img2 from '../../image/g2.jpg'

const Right = () => {
  const [show, setShow] = useState(false);
  const clickHandler = () => {
    setShow(true);
  };
  const clickHandlerr = () => {
    setShow(false);
  };
  return (
    <div className="Right hidden tablet:block  h-[91vh] w-[25%] bg-slate-900 fixed right-0">
      <ul className="flex flex-col items-end justify-between h-[70vh] mr-5 mt-5 text-stone-400">
        <li className="flex justify-center items-center cursor-pointer">
          <p className="mr-5">Saeed Koja</p>
          <img src={img2} className="w-10 h-10 rounded-3xl cursor-pointer" alt=''></img>
        </li>
        <li className="flex justify-center items-center cursor-pointer">
          <p className="mr-5">الأصدقاء</p>
          <box-icon color="#ffffff" type="solid" name="user"></box-icon>
        </li>
        <li className="flex justify-center items-center cursor-pointer">
          <p className="mr-5">الأحدث</p>
          <box-icon color="#ffffff" type="solid" name="news"></box-icon>
        </li>
        <li className="flex justify-center items-center cursor-pointer">
          <p className="mr-5">المجموعات</p>
          <box-icon color="#ffffff" type="solid" name="group"></box-icon>
        </li>
        <li className="flex justify-center items-center cursor-pointer">
          <p className="mr-5">watch</p>
          <box-icon color="#ffffff" type="solid" name="tv"></box-icon>
        </li>
        <li className="flex justify-center items-center cursor-pointer">
          <p className="mr-5">الذكريات</p>
          <box-icon color="#ffffff" name="history"></box-icon>
        </li>
        <li className="flex justify-center items-center cursor-pointer">
          <p className="mr-5">العناصر المحفوظة</p>
          <box-icon color="#ffffff" type="solid" name="save"></box-icon>
        </li>
        <li className="flex justify-center items-center cursor-pointer">
          <p className="mr-5">الصفحات</p>
          <box-icon color="#ffffff" name="flag-alt" type="solid"></box-icon>
        </li>
        <li className="flex justify-center items-center cursor-pointer">
          <p className="mr-5">المفضلة</p>
          <box-icon color="#ffffff" type="solid" name="star"></box-icon>
        </li>
        <li className="flex justify-center items-center cursor-pointer">
          <p className="mr-5">الألعاب</p>
          <box-icon color="#ffffff" type="solid" name="game"></box-icon>
        </li>
        {!show && (
          <div className="flex justify-center items-center cursor-pointer">
            <button onClick={clickHandler}>عرض المزيد</button>
            <box-icon color="#ffffff" name="chevron-down"></box-icon>
          </div>
        )}
        {show && (
          <li className="flex justify-center items-center cursor-pointer">
            <p className="mr-5">حملة دمع التبرعات</p>
            <box-icon color="#ffffff" name="heart" type="solid"></box-icon>
          </li>
        )}
        {show && (
          <li className="flex justify-center items-center cursor-pointer">
            <p className="mr-5">بث مباشر</p>
            <box-icon color="#ffffff" type="solid" name="video"></box-icon>
          </li>
        )}
        {show && (
          <li className="flex justify-center items-center cursor-pointer">
            <p className="mr-5">التسوق</p>
            <box-icon color="#ffffff" name="cart-download"></box-icon>
          </li>
        )}
        {show && (
          <li className="flex justify-center items-center cursor-pointer">
            <p className="mr-5">مدير الإعلانات</p>
            <box-icon
              color="#ffffff"
              type="solid"
              name="bar-chart-alt-2"
            ></box-icon>
          </li>
        )}
        {show && (
          <div className="flex justify-center items-center cursor-pointer">
            <button onClick={clickHandlerr}>عرض أقل </button>{" "}
            <box-icon color="#ffffff" name="chevron-up"></box-icon>
          </div>
        )}
      </ul>
      <hr className="border-stone-400 mr-5 ml-5 mb-2 mt-2"></hr>
      <div className="flex flex-col mr-5">
        <p className="text-right text-[#ffffff] text-lg">اختصاراتك</p>
        <div className="flex flex-row-reverse items-center justify-between">
          <img src={img} alt='' className="w-10 h-10 rounded-3xl cursor-pointer"></img>
          <p className="text-stone-400 text-sm ml-2 mt-4 cursor-pointer ">
            IT Al-Baath Engineering 2018/2019
          </p>
        </div>
      </div>
    </div>
  );
};
export default Right;
