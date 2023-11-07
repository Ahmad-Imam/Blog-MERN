import React from "react";
import "./posts.css";
import Post from "../post/Post";

export default function Posts({ posts }) {
  // console.log(posts);
  const postArray = posts.map((post, index) => {
    return <Post post={post} key={index} />;
  });

  // console.log(postArray.length);
  return <div className="posts">{postArray}</div>;
}
