import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import Articlelist from "./ArticleList"


console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About about={blogData.about} image={blogData.image}/>
      <ArticleList blogData={blogData}/>
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!

    </div>
  );
}

export default App;
