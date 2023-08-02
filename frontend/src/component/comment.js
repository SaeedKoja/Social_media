import React from "react";
import "./comment.css";
import imageuser from "../image/g2.jpg";

const Comment = (props) => {
  return (
    <div className="flex mb-[30px] relative" key={props.idCom}>
      <img src={imageuser} className="w-9 h-9 rounded-full" alt="" />
      <div className="bg-slate-600 px-4 pl-10 py-2 rounded-2xl mr-2">
        <div className="text-[#ffffff]">
          <h4 className="text-lg font-normal">{props.name}</h4>
          <label className="text-sm font-light text-stone-400">
            {props.comment}
          </label>
        </div>
      </div>
      <div className="absolute flex tablet:left-[77%] left-[65%] justify-between items-center w-16 top-[95%]">
        <p>أعجبني</p>
        <p>رد</p>
      </div>
    </div>
  );
};

export default Comment;
