import React, { useEffect, useState } from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  console.log(location);

  async function fetchPosts() {
    const res = await axios.get("/api/posts" + search);
    console.log(res.data.length);
    setPosts(res.data);
  }
  useEffect(() => {
    fetchPosts();
  }, []);
  // console.log("aa");
  // console.log(posts);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
