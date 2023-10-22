import React from "react";
import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingsForm">
          <label htmlFor="">Profile Picture</label>
          <div className="settingsProfileImg">
            <img
              src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsProfileImgIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              className="settingsProfileFileInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="name" />
          <label>Email</label>
          <input type="text" placeholder="email" />
          <label>Password</label>
          <input type="password" placeholder="password " />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
