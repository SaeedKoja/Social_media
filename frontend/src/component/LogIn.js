import React, { useState } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router";

const LogIn = () => {
  const nav = useNavigate();
  const [enteredName, setEnteredName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [enteredPass, setEnteredPass] = useState("");
  const [passTouched, setPassTouched] = useState(false);
  const nameIsValid = enteredName.trim() !== "";
  const passIsValid = enteredPass.trim() !== "";

  const submitHandler = (event) => {
    event.preventDefault();
    setNameTouched(true);
    setPassTouched(true);
    if (!nameIsValid || !passIsValid) {
      swal({
        icon: "warning",
        timer: 2000,
        title: "!الرجاء ادخال جميع الحقول",
        button: false,
        className: "p-[35px]",
      });
    } else {
      swal({
        icon: "success",
        timer: 2200,
        title: "!تمت عملية التحقق بنجاح",
        button: false,
        className: "p-[35px]",
      });
      setTimeout(() => {
        nav("/Home");
      }, 2200);
      setEnteredName("");
      setEnteredPass("");
      setNameTouched(false);
      setPassTouched(false);
    }
  };
  const nameInputeIsInvalid = !nameIsValid && nameTouched;
  const passInputeIsInvalid = !passIsValid && passTouched;
  const nameInputBlurHandler = (event) => {
    setNameTouched(true);
  };
  const emailClasses = nameInputeIsInvalid
    ? "bg-slate-50 w-[300px] md:w-[500px] h-[50px] mb-5 border border-[brown] outline-none rounded-xl px-10 placeholder:text-slate-500 text-slate-500"
    : "bg-slate-50 w-[300px] md:w-[500px] h-[50px] border border-[#dddfe2] mb-5 outline-none rounded-xl px-10 placeholder:text-slate-500 text-slate-500";
  const passClasses = passInputeIsInvalid
    ? "bg-slate-50 w-[300px] md:w-[500px] h-[50px] mb-5 border border-[brown] outline-none rounded-xl px-10 placeholder:text-slate-500 text-slate-500"
    : "bg-slate-50 w-[300px] md:w-[500px] h-[50px] border border-[#dddfe2] mb-5 outline-none rounded-xl px-10 placeholder:text-slate-500 text-slate-500";

  return (
    <div className="bg-[#ddd] h-[100vh]">
      <div className=" fixed top-0 z-[100] bg-slate-800 w-full">
        <div className="container px-10">
          <div className="content-navbar flex justify-between items-center h-[60px]">
            <div className="logo">
              <h3 className=" text-slate-50 text-3xl font-semibold">
                facebook
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-[80vh]">
        <form
          onSubmit={submitHandler}
          className="bg-slate-50 py-10 px-3 mt-40 rounded-xl shadow-xl"
        >
          <div>
            <input
              type="email"
              id="email"
              dir="rtl"
              className={emailClasses}
              value={enteredName}
              onChange={(e) => {
                setEnteredName(e.target.value);
                setNameTouched(true);
              }}
              onBlur={nameInputBlurHandler}
              placeholder="البريد الالكتروني أو رقم الهاتف"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="كلمة السر"
              dir="rtl"
              className={passClasses}
              value={enteredPass}
              onChange={(e) => {
                setEnteredPass(e.target.value);
                setPassTouched(true);
              }}
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-slate-800 outline-none w-[300px] md:w-[500px] mb-5 h-[50px] text-slate-50 text-3xl font-semibold rounded-xl "
              // 1877f2
            >
              تسجيل الدخول
            </button>
          </div>
          <div className="text-center text-sky-700 mb-5">
            <a href="#fdf">هل نسيت كلمة السر؟</a>
          </div>
          <hr className="bg-[#dddfe2] mb-5"></hr>
          <div className="text-center">
            <button className="bg-orange-500 outline-none rounded-xl font-extrabold text-xl px-5 py-2 text-slate-50">
              انشاء حساب جديد
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
