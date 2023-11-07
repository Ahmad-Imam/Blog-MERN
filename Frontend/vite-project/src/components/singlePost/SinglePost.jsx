import React, { useContext, useEffect, useState } from "react";
import "./singlePost.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation();
  const [postInfo, setPostInfo] = useState({});
  const { user } = useContext(LoginContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  // const postId = location.state?.postId;
  const path = location.pathname.split("/")[2];
  // console.log(location);
  console.log("in single");
  console.log(postInfo);
  const PF = "http://localhost:3000/images/";

  async function getPostInfo() {
    const res = await axios.get(`/api/posts/${path}`);
    setPostInfo(res.data);
    setTitle(res.data.title);
    setDesc(res.data.desc);
  }
  // console.log(postInfo);
  // console.log(user);
  console.log(user.username);
  useEffect(() => {
    getPostInfo();
  }, [path]);

  async function handleDeletePost() {
    try {
      await axios.delete("/api/posts/" + path, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdatePost() {
    try {
      await axios.put("/api/posts/" + path, {
        username: user.username,
        title,
        desc,
      });
      // window.location.reload();
      setUpdateMode(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {postInfo.photo && (
          <img
            src={PF + postInfo.photo}
            alt="Post Image"
            className="singlePostImg"
          />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {postInfo.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDeletePost}
                ></i>
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:{" "}
            <Link className="link" to={`/?user=${postInfo.username}`}>
              <b>{postInfo.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(postInfo.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdatePost}>
            Update Post
          </button>
        )}
      </div>
    </div>
  );
}
