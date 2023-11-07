import React, { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function () {
  const [catsInfo, setCatsInfo] = useState([]);

  async function getCatsInfo() {
    const res = await axios.get(`/api/cats`);
    setCatsInfo(res.data);
  }

  async function handleCatClick(e) {
    // const res = await axios.get(`/api/posts/?cat=${e.target.innerText}`);
    console.log(e.target.innerText);
    // console.log(res.data);
    window.location.replace(`/?cat=${e.target.innerText}`);
  }

  const catsList = catsInfo.map((cat) => {
    return (
      <li key={cat._id} className="sidebarListItem" onClick={handleCatClick}>
        {cat.name}
      </li>
    );
    // <Link key={cat._id} className="link" to={`/?cat=${cat.name}`}>

    {
      /* </Link> */
    }
  });
  // console.log(catsList);
  useEffect(() => {
    getCatsInfo();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src="https://ca-times.brightspotcdn.com/dims4/default/52cf327/2147483647/strip/true/crop/1024x682+0+0/resize/1200x799!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fdd%2F25%2Fbf2d9257609c19dca863b1ec519b%2Fla-mbernardin-1479317400-snap-photo"
          alt=""
          className="sidebarImg"
        />
        <p className="sidebarInfo">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia hic
          magni modi quidem, excepturi quos rem ea perferendis saepe minima.
        </p>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">Categories</div>
        <ul className="sidebarList">{catsList}</ul>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">Follow us</div>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
