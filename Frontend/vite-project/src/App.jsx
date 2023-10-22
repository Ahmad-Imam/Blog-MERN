import "./App.css";
import Navbar from "./components/navbar/Navbar";
import SinglePost from "./components/singlePost/SinglePost";
import Register from "./pages/Register/Register";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

function App() {
  const loggedIn = false;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route
          element={loggedIn ? <Navigate replace to={"/"} /> : <Register />}
          path="/register"
        ></Route>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Settings />} path="/settings"></Route>
        <Route element={<Write />} path="/write"></Route>
        <Route element={<Single />} path="/post/:postId"></Route>
      </Routes>
      {/* <Settings /> */}
      {/* <Login /> */}
      <Register />
      {/* <Write /> */}
    </Router>
  );
}

export default App;
