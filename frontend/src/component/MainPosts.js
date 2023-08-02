import React, { useState, useRef, useEffect, useCallback } from "react";
import "./MainPosts.css";
import imageuser from "../image/g2.jpg";
import Post from "./post";
import img from '../image/3.jpg'
import img2 from '../image/4.jpg'
import img3 from '../image/photo_2022-12-09_00-52-43.jpg'
import img4 from '../image/photo_2022-12-09_00-53-37.jpg'
import img5 from '../image/pic2.jpg'
import img6 from '../image/pic3.jpg'
import axios from "axios";

const MainPosts = (props) => {
  // const postText = useRef();
  // const postImage = useRef();
  const [Image, setImage] = useState(false);
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState("");
  const [newPost, setNewPost] = useState("");

  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const fethPosts = useCallback(() => {
    axios
      .get("http://localhost:8000/api/SocialMedia/posts")
      .then((res) => {
        setPosts(res.data.data);
        console.log(res.data.data)
        axios
          .get(`http://localhost:8000/api/SocialMedia/comments`)
          .then((res) => {
            console.log(res.data)
            setComments(res.data);
          });
      });
  }, []);
  useEffect(() => {
    fethPosts();
  }, [fethPosts]);
  let postsArray;
  if (newPost !== "") {
    postsArray = [...newPost, ...posts];
  } else {
    postsArray = [...posts];
  }

  const submitHandler = (e) => {
    e.preventDefault();
    // axios.defaults.withCredentials = true;
    // axios.get("http://localhost:8000/sanctum/csrf-cookie");
    const formData = new FormData();
    formData.append("Name", 1 );
    formData.append("TeSm", postText);
    formData.append("AttSm", postImage);
    axios
      .post("http://localhost:8000/api/SocialMedia/post", formData)
      .then((res) => {
        console.log(res.data.data)
        setNewPost([...res.data.data,...newPost]);
        setPostText("");
        setPostImage("");
        setImage(false);
      });
  };
  console.log(postsArray);
  return (
    <div className="w-full">
      <div className="w-[95%] mx-auto mt-[20px] mb-[10px]" dir="rtl">
        <form onSubmit={submitHandler} className="">
          <div className="rounded-lg py-[20px] text-stone-50 px-[20px] m-auto bg-slate-900">
            {/* <h4 className="text-[25px] text">انشاء منشور </h4> */}
            <div className="flex justify-between items-center mb-2">
              <img src={imageuser} className="w-[50px] rounded-full" alt="" />
              <input
                type="text"
                className="tablet:w-[83%] w-[73%] px-4 outline-none rounded-r-full rounded-l-full h-10  bg-slate-600"
                value={postText}
                placeholder="بم تفكر يا Saeed؟"
                onChange={(e) => {
                  setPostText(e.target.value);
                }}
              />
              <button type="submit" className="mt-1">
              <box-icon name='send' flip='horizontal' color='#ffffff'></box-icon>
              </button>
            </div>
            <hr className="border-stone-500 mb-4"></hr>
            {Image && (
              <div className="flex justify-center items-center mb-[10px]">
                <img src={Image} alt="" />
              </div>
            )}
            <div className="flex justify-between">
              <div className="flex w-1/2 justify-center tablet:w-1/4 cursor-pointer">
              <box-icon name='video-plus' color='red'></box-icon>
                <p className="mr-2">فيديو بث مباشر</p>
              </div>
              <div className="flex tablet:w-1/4 w-1/2 justify-center cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  id="uploadimg"
                  className="hidden"
                  onChange={(e) => {
                    setPostImage(e.target.files[0]);
                    setImage(URL.createObjectURL(e.target.files[0]));
                  }}
                />
                <label for="uploadimg" className="flex cursor-pointer">
                <box-icon name='image' color='green'></box-icon>
                <p className="mr-2">صورة/فيديو</p>
                </label>
              </div>
              <div className="hidden tablet:flex w-1/4 cursor-pointer">
              <box-icon color='yellow' name='smile'></box-icon>
              <p className="mr-2">Feeling/active</p>
              </div>
            </div>
          </div>
        </form>
        <div className="h-14 bg-slate-900 mt-4 rounded-lg flex justify-evenly items-center">
                  <div className="w-28 h-11 border text-[blue] rounded-l-full flex justify-evenly items-center rounded-r-full border-[blue]">
                  <box-icon name='video-plus' color='blue'></box-icon>
                  <p>انشاء غرفة</p>
                  </div>
                  <div className="relative">
                      <img className="w-10 rounded-full" src={img} alt=''/>
                      <div className="w-3 border border-[black] h-3 rounded-full bg-[green] absolute top-7 left-0"></div>
                  </div>
                  <div className="relative">
                      <img className="w-10 rounded-full" src={img2} alt=''/>
                      <div className="w-3 border border-[black] h-3 rounded-full bg-[green] absolute top-7 left-0"></div>
                  </div>
                  <div className="relative">
                      <img className="w-10 rounded-full" src={img3} alt=''/>
                      <div className="w-3 border border-[black] h-3 rounded-full bg-[green] absolute top-7 left-0"></div>
                  </div>
                  <div className="relative">
                      <img className="w-10 rounded-full" src={img4} alt=''/>
                      <div className="w-3 border border-[black] h-3 rounded-full bg-[green] absolute top-7 left-0"></div>
                  </div>
                  <div className="relative hidden tablet:block">
                      <img className="w-10 rounded-full" src={img5} alt=''/>
                      <div className="w-3 border border-[black] h-3 rounded-full bg-[green] absolute top-7 left-0"></div>
                  </div>
                  <div className="relative hidden tablet:block">
                      <img className="w-10 rounded-full" src={img6} alt=''/>
                      <div className="w-3 border border-[black] h-3 rounded-full bg-[green] absolute top-7 left-0"></div>
                  </div>
        </div>
        <div className="">
          {postsArray.map((array, index) => {
            return (
              <Post
                key={array.id}
                comments={comments.filter((array2) => array2.IdSm === array.id)}
                idPost={array.id}
                AttSm={array.AttSm}
                TeSm={array.TeSm}
                name={array.nameUser}
                created_at={array.created_at}
              ></Post>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainPosts;
