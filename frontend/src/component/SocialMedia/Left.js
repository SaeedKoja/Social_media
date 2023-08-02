import React from "react";
import "boxicons";
import img from '../../image/photo_2022-12-09_00-53-37.jpg'
import img2 from '../../image/photo_2022-12-09_00-52-43.jpg'
import img3 from '../../image/3.jpg'
import img4 from '../../image/4.jpg'
import img5 from '../../image/g3.jpg'

const Left = () => {
  return (
    <div className="Left h-[91vh] hidden w-[25%] tablet:fixed  tablet:left-0 bg-slate-900 tablet:flex
     tablet:flex-col tablet:justify-evenly text-stone-400">
      <div>
        <h1 className="text-right mr-5 text-xl mb-2 text-[#ffffff]">
          أعياد الميلاد
        </h1>
        <p className="mr-4 flex justify-end items-center mb-1">
          Nuncy Morad اليوم عيد ميلاد
          <box-icon
            color="#ffffff"
            style={{ margin: "0 0 0 7px" }}
            type="solid"
            name="gift"
          ></box-icon>
        </p>
        <p className="text-right mr-5">و2 من الأشخاص الأخرين</p>
      </div>
      <hr className="border-stone-400 mr-5 ml-5 mb-2 mt-2"></hr>
      <div>
        <p className="text-xl text-right mr-5 mb-2 text-[#ffffff]">جهات الاتصال</p>
        <div className="flex justify-evenly items-center">
          <box-icon name="dots-horizontal-rounded" color="#ffffff"></box-icon>
          <box-icon type="solid" name="video" color="#ffffff"></box-icon>
          <box-icon name="search-alt" color="#ffffff"></box-icon>
        </div>
      </div>
        <div className="flex flex-col justify-between h-[60%]">
          <div className="flex items-center justify-end mr-5">
            <p className="text-lg">samia_hassan</p>
            <img src={img} className='w-14 ml-5 rounded-full' alt=''/>
          </div>
          <div className="flex items-center justify-end mr-5">
            <p className="text-lg">ruba1_masa</p>
            <img src={img2} className='w-14 ml-5 rounded-full' alt=''/>
          </div>
          <div className="flex items-center justify-end mr-5">
            <p className="text-lg">aya_hassan</p>
            <img src={img3} className='w-14 ml-5 rounded-full' alt=''/>
          </div>
          <div className="flex items-center justify-end mr-5">
            <p className="text-lg">maya_omran</p>
            <img src={img4} className='w-14 ml-5 rounded-full' alt=''/>
          </div>
          <div className="flex items-center justify-end mr-5">
            <p className="text-lg">Yazan_Sbsabe</p>
            <img src={img5} className='w-14 ml-5 rounded-full' alt=''/>
          </div>
        </div>
    </div>
  );
};

export default Left;
