import React from "react";
import blog from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList"


console.log(blog);

function App() {
  return (
    <div className="App">
      <Header name={blog.name}/>
      <About about={blog.about} image={blog.image}/>
      <ArticleList blog={blog}/>
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!

    </div>
  );
}

export default App;
