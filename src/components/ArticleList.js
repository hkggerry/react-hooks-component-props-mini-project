import React from "react";
import Article from "./Article";

function ArticleList(){
   return ( 
   <main>{article.map(function(x){
        return <Article article ={x}/>
       })}
   </main>
   )}

export default ArticleList;