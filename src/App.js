import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Posts from "./components/Posts";
import PostLists from "./components/PostLists";
import Post from "./components/Post";

function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link>
        <Link to="/posts" style={{ padding: 5 }}>
          Posts
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="posts" element={<Posts />}>
          <Route index element={<PostLists />} />
          <Route path=":slug" element={<Post />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
