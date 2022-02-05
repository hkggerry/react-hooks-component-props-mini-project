import React from "react";
import Article from "./Article";

function ArticleList({posts}){
   return (
      <main>
      {posts.map(function(x){
         return <Article posts ={x} title ={x.title} date ={x.date} preview ={x.preview}/>
      })}
      </main>
   )}

export default ArticleList;
