import React, { useContext, useEffect, useState } from "react";

import "./write.css";
import axios from "axios";
import { LoginContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(LoginContext);
  const navigate = useNavigate();

  async function handleSubmitForm(e) {
    e.preventDefault();

    const newPost = {
      username: user.username,
      title,
      desc,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;

      try {
        await axios.post("/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.post("/api/posts", newPost);
      console.log("Write");
      console.log(res);
      window.location.replace("/post/" + res.data._id);
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
    <div className="write">
      {file && (
        <img src={URL.createObjectURL(file)} alt="" className="writeImg" />
      )}
      <form action="" className="writeForm" onSubmit={handleSubmitForm}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeFormIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            className="writeFileInput"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            autoFocus={true}
            className="writeTextInput"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story"
            name=""
            id=""
            cols="30"
            rows="10"
            className="writeTextArea"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="writeSubmit">
          Publish
        </button>
      </form>
    </div>
  );
}
