import React from "react";

const About = () => {
  return (
    <div className="text-[#ffffff] tablet:w-[70%] tablet:m-auto tablet:px-10 tablet:mt-14 bg-slate-900">
      <div class=" h-11 px-4 flex justify-end items-center">
        <p class="text-stone-400 font-serif font-extrabold mr-4 text-2xl">حول</p>
        <box-icon
          type="solid"
          color="#ffffff"
          name="caret-right-circle"
        ></box-icon>
      </div>
      <hr className="border-stone-400 mb-2 mt-2"></hr>
      <div class="space-y-4">
        <p class="flex justify-end font-bold text-2xl font-serif p-4"> العمل</p>
        <div class="flex justify-end items-center p-4  ">
          <div class="rounded-full absolute left-[87%] flex justify-center items-center bg-slate-600 h-10 w-10 tablet:left-[78%] ">
            {" "}
            <box-icon
              name="briefcase"
              color='#ffffff'
              // class=" absolute  bottom-[25%] right-[20%]  flex justify-end items-center  tablet:absolute tablet:left-[28%]"
            >
              {" "}
            </box-icon>
          </div>
          <p class="flex justify-end text-lg text-stone-400 font-serif absolute left-[55%] tablet:left-[64%] tablet:text-3xl">
            {" "}
            إضافة خبرة علمية
          </p>
        </div>
        <p class="flex justify-end font-bold text-2xl font-serif p-4">
          مستوى التعليم
        </p>
        <div class="flex justify-end items-center p-4">
          <div class="rounded-full absolute left-[87%] flex justify-center items-center bg-slate-600 h-10 w-10  tablet:absolute tablet:left-[78%] ">
            {" "}
            <box-icon
              name="graduation"
              type="solid"
              color='#ffffff'
              // class=" absolute  bottom-[25%] right-[20%]  flex justify-end items-center tablet:absolute tablet:left-[28%]"
            >
              {" "}
            </box-icon>
          </div>
          <p class="flex justify-end text-lg text-stone-400 font-serif absolute left-[66%] tablet:left-[69%]  tablet:text-3xl">
            إضافة كلية
          </p>
        </div>
        <div class=" border-b-2 border-stone-400 p-2"> </div>

        <div class="flex justify-end items-center p-10">
          <div class="rounded-full flex justify-center items-center absolute left-[87%] bg-slate-600 h-10 w-10  tablet:absolute tablet:left-[78%] ">
            {" "}
            <box-icon
              type="solid"
              name="school"
              color='#ffffff'
              class=" absolute  bottom-[25%] right-[20%]  flex justify-end items-center"
            ></box-icon>{" "}
          </div>
          <p class="flex justify-end text-lg text-stone-400 font-serif absolute left-[53%] tablet:left-[63%]  tablet:text-3xl">
            {" "}
            إضافة مدرسة ثانوية{" "}
          </p>
          <div class="rounded-full flex justify-center items-center absolute left-[87%] bottom-[30%] bg-slate-600 h-10 w-10 tablet:absolute tablet:left-[78%] tablet:top-[75%] ">
            {" "}
            <box-icon
              name="graduation"
              type="solid"
              color='#ffffff'
              class=" absolute  bottom-[25%] right-[20%]  flex justify-end items-center"
            >
              {" "}
            </box-icon>
          </div>
          <p class="flex justify-end text-lg  text-stone-400  font-serif absolute left-[69%] bottom-[31%] tablet:left-[71%]  tablet:text-2xl tablet:top-[76%]">
            {" "}
            تدرس في{" "}
          </p>
          <p class="flex justify-end text-sm  text-stone-400  font-serif absolute w-52 tablet:w-fit left-[1%] bottom-[30%] tablet:left-[31%]  tablet:text-2xl tablet:top-[76%]">
            {" "}
            Faculty of it e Engineering,Al-Baath Univercity
          </p>
        </div>
      </div>
      <div class="border-b-2 border-stone-400 h-20"> </div>
      {/* <hr className="border-stone-400 mb-2 mt-2"></hr> */}
      <div class="space-y-4 tablet:h-96 h-64">
        <p class="flex justify-end font-bold text-2xl font-serif p-4"> المدينة والمنشأ</p>
        <div class="flex justify-end items-center space-y-5 tablet:mt-14 p-4">
          <div class="rounded-full flex justify-center items-center absolute left-[87%] bg-slate-600 h-10 w-10  tablet:absolute tablet:left-[78%] ">
            {" "}
            <box-icon
              name="briefcase"
              color='#ffffff'
              // class=" absolute  bottom-[25%] right-[20%]  flex justify-end items-center"
            >
              {" "}
            </box-icon>
          </div>
          <p class="flex justify-end text-lg text-stone-400 font-serif absolute  top-[86%] left-[65%] tablet:left-[68%]  tablet:text-3xl tablet:top-[95%]">
            {" "}
            إضافة مدينة
          </p>
          <div class="rounded-full flex justify-center items-center absolute left-[87%] top-[93%] bg-slate-600 h-10 w-10  tablet:absolute tablet:left-[78%] tablet:top-[110%] ">
            {" "}
            <box-icon
              name="edit-location"
              type="solid"
              color='#ffffff'
              // class=" absolute  bottom-[25%] right-[20%]  flex justify-end items-center"
            >
              {" "}
            </box-icon>
          </div>
          <p class="flex justify-end text-lg text-stone-400 font-serif absolute left-[18%] top-[94%] tablet:left-[42%]  tablet:text-3xl tablet:top-[111%]">
            {" "}
            Homs,Homs,Syria
          </p>
          <p class="flex justify-end text-lg text-stone-400 font-serif absolute left-[64%] top-[94%] tablet:left-[67%]  hover:bg-fuchsia-700 tablet:text-3xl tablet:top-[111%]">
            المدينة الحالية
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
