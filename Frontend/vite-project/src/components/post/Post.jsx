import React from "react";
import "./post.css";
import { Link, useLocation } from "react-router-dom";

export default function Post({ post }) {
  const {
    _id,
    categories,
    createdAt,
    desc,
    photo,
    title,
    updatedAt,
    username,
  } = post;

  // const location = useLocation();
  // console.log("pppppppppp"+ location);
  console.log("in post");
  const PF = "http://localhost:3000/images/";

  console.log("lol");
  console.log(PF + photo);
  return (
    <div className="post">
      {photo && <img src={PF + photo} alt="Post Image" className="postImg" />}
      <div className="postInfo">
        <div className="postCats">
          {categories.map((cat) => {
            <span className="postCat">{cat.name}</span>;
          })}
        </div>

        <Link className="link" state={{ postId: _id }} to={`/post/${_id}`}>
          <span className="postTitle"> {title}</span>
        </Link>

        <hr />
        <span className="postDate">{new Date(createdAt).toDateString()}</span>
        <p className="postDesc">{desc}</p>
      </div>
    </div>
  );
}
