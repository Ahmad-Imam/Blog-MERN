import React from "react";
import "./sidebar.css";

export default function () {
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
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
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
