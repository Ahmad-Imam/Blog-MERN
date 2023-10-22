import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        src="https://www.wwe.com/f/styles/gallery_img_ml/public/all/2020/04/WWEBackdrops_InRing--b1c18eb31aec4fe033632f47eea8f50f.jpg"
        alt=""
        className="headerImg"
      />
    </div>
  );
}
