import React, { useEffect, useState } from "react";
import "./post.css";
import imageuser from "../image/g3.jpg";
import Comment from "./comment";
import axios from "axios";

const Post = (props) => {
  const [comment, setComment] = useState("");
  const [idComment, setIdComment] = useState("");
  const [showCom, setShowCom] = useState(false);
  const com = props.comments;
  const [commentArray, setCommentArray] = useState("");
  const [commentRefresh, setCommentRefresh] = useState([]);
  useEffect(() => {
    setCommentArray([...com,...commentRefresh]);
  }, [com]);
  const submitCommentHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:8000/api/SocialMedia/posts/${idComment}/comment`,
        {
          IdSm: idComment,
          TeSmCom: comment,
          Name: 1,
        }
      )
      .then((res) => {
        console.log(res.data)
        setComment("");
        setCommentRefresh([...commentRefresh,res.data])
        setCommentArray([...commentArray, res.data]);
      });
  };

  const showComments = () => {
    setShowCom(true);
  };

  return (
    <div className="bg-slate-900 mt-4 rounded-lg">
      <div className="container" dir="rtl">
        <div className="tablet:px-[40px] px-[20px] py-[20px]" key={props.id}>
          <div className="flex items-center justify-between mb-5 text-[#ffffff]">
            <div className="flex items-center">
            <img className="tablet:w-[13%] w-[20%] rounded-full" src={imageuser} alt="" />
            <div className="pr-[20px]">
              <h4 className="tablet:text-[18px] text-[16px]">{props.name}</h4>
              <p dir="ltr" className="flex justify-end items-center opacity-[0.5] text-xs">{props.created_at}</p>
            </div>
            </div>
            <div className="flex">
            <box-icon color='#ffffff' name='dots-horizontal-rounded'></box-icon>
            <box-icon style={{margin:'0 15px'}} name='x' color='#ffffff'></box-icon>
            </div>
          </div>
          <div className="flex flex-col text-[16px] font-light text-[#ffffff] mb-[10px]">
            <label className="mb-[10px]">{props.TeSm}</label>
            {props.AttSm !== null && (
              <img
              className=" m-auto bg-cover rounded-lg "
                src={`http://localhost:8000/uploads/SocialMedia/${props.AttSm}`}
                alt=""
              />
            )}
          </div>
          <div className="flex justify-between items-center text-stone-400">
            <div className="flex justify-center items-center">
            <box-icon name='like' style={{margin:'0 0 0 -8px'}} type='solid' color='blue'></box-icon>
            <box-icon type='solid' name='heart' style={{margin:'0 0 0 5px'}} color='red'></box-icon>6.5 ألف
            </div>
            <p>3.1 ألف تعليقا    مشاركتان</p>
          </div>
          <hr className="border-stone-500 mt-2 m-auto"></hr>
          <div className="flex justify-between px-4 items-center h-11 text-stone-400">
            <div className="flex items-center justify-between">
            <box-icon name='like' color='gray'></box-icon>
              <p className="mr-2">أعجبني</p>
            </div>
            <div className="flex items-center justify-between">
            <box-icon name='comment' color='gray'></box-icon>
              <p className="mr-2">تعليق</p>
            </div>
            <div className="flex items-center justify-between">
            <box-icon name='share' color='gray'></box-icon>
              <p className="mr-2">مشاركة</p>
            </div>
          </div>
          <hr className="border-stone-500 mb-4"></hr>
          <form className="flex justify-between items-center relative my-[15px] mx-0" onSubmit={submitCommentHandler}>
            <input
              type="text"
              className="bg-slate-600 outline-none text-[#ffffff] text-[20px] w-full rounded-l-full rounded-r-full py-0 pr-[20px] pl-[40px] h-[45px]"
              placeholder="اكتب تعليقا ..."
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
                setIdComment(props.idPost);
              }}
            />
            <button type="submit" className="flex justify-center items-center"><box-icon name='send' flip='horizontal' color='#ffffff'></box-icon></button>
            <div className="flex absolute left-8 justify-between w-[20%]">
            <box-icon name='link-alt' color='gray'></box-icon>
            <box-icon name='file-gif' color='gray' type='solid'></box-icon>
            <box-icon name='image' color='gray'></box-icon>
            <box-icon name='smile' color='gray'></box-icon>
            </div>
          </form>
          {commentArray.length !== 0 && <hr className="border-stone-500 mb-4"></hr>}
          <div className="text-stone-400 flex flex-col mt-[10px]">
            {commentArray.length !== 0 && <div className="flex justify-between items-center text-[20px] mb-[20px]">
              <label key={props.id} onClick={showComments} dir='ltr' className=' cursor-pointer pr-[10px]'>
                عرض كل التعليقات
              </label>
            </div>}
            <div className="all-comment">
              {!showCom && commentArray[0] !== undefined && (
                <Comment
                  key={commentArray[0].idPost}
                  comment={commentArray[0].TeSmCom}
                  name={commentArray[0].nameUser}
                  idCom={commentArray[0].id}
                ></Comment>
              )}
              {showCom &&
                commentArray.map((com, index) => (
                  <Comment
                    key={index}
                    comment={com.TeSmCom}
                    name={com.nameUser}
                    idCom={com.id}
                  ></Comment>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
