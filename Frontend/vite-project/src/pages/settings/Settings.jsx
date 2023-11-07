import React, { useContext, useState } from "react";
import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { LoginContext } from "../../context/Context";
import axios from "axios";
import { LoginSuccess } from "../../context/Actions";

export default function Settings() {
  const { user, dispatch } = useContext(LoginContext);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [success, setSuccess] = useState(false);
  const PF = "http://localhost:3000/images/";

  console.log(username);

  async function handleSubmitForm(e) {
    e.preventDefault();

    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;

      try {
        await axios.post("/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    } else {
      updatedUser.profilePic = user.profilePic;
    }
    console.log(user._id);
    console.log(user.profilePic);
    try {
      const res = await axios.put("/api/users/" + user._id, updatedUser);
      console.log("Write");
      console.log(res.data);
      setSuccess(true);
      dispatch(LoginSuccess(res.data));
      // window.location.replace("/post/" + res.data._id);
      // navigate(
      //   "/post/" + res.data._id,
      //   { state: { postId: res.data._id } },
      //   { replace: true }
      // );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingsForm" onSubmit={handleSubmitForm}>
          <label htmlFor="">Profile Picture</label>
          <div className="settingsProfileImg">
            <img
              // src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
              src={file ? PF + URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsProfileImgIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              className="settingsProfileFileInput"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="password "
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{
                color: "gray",
              }}
            >
              Profile updated successfully
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
