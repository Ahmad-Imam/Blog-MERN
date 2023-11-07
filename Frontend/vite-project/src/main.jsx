import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LoginContextProvider } from "./context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginContextProvider>
      <App />
    </LoginContextProvider>
  </React.StrictMode>
);

// "https://media.cnn.com/api/v1/images/stellar/prod/230520165534-03-john-cena-dwayne-johnson-wwe-2011.jpg?c=16x9&q=h_720,w_1280,c_fill"
