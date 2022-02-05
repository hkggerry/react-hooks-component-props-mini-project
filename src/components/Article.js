import React from "react";

function Article({ title, date, article }){
    return (
    <div>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{article}</p>
    </div>
    )}

    export default Article;

