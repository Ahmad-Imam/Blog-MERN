import React from "react";

import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        src="https://media.cnn.com/api/v1/images/stellar/prod/230520165534-03-john-cena-dwayne-johnson-wwe-2011.jpg?c=16x9&q=h_720,w_1280,c_fill"
        alt=""
        className="writeImg"
      />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeFormIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" className="writeFileInput" />
          <input
            type="text"
            placeholder="Title"
            autoFocus={true}
            className="writeTextInput"
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
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
