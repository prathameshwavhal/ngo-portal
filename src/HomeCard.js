import React from 'react';
import {Link} from 'react-router-dom';
import { Article } from './Article';

export const HomeCard = ({ article, onDelete, articles, changeSno}) => {

    const callArticle = (articlet) => {
        changeSno(articles.findIndex(articles => articles.title===articlet));


        // window.location.href = "/article";
        // console.log(articlet);
    }

    // console.log(article.image);
    // let addressString = "<%=rs("+article.image+")%>";
    let addressString = article.image;
    return (
        <div class="col" style={{width: `20rem`}}>
            
            <div className="card h-100" style={{width: `18rem`, border: '3px solid #444 0.8', boxShadow: "7px 7px 7px #9E9E9E"}}>
                <Link to={{
                    pathname: "/article",
                    sno: articles.findIndex(articles => articles.title===article.title),
                    articles: {articles}
                }}>
                <img src={addressString} className="card-img-top" style={{height: "auto", width: "100%"}} onClick={() => { callArticle(article.title) }} />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">NGO: {article.authorName}</p>
                    <button className="btn btn-sm btn-danger" onClick={() => { onDelete(article) }}>Delete</button>
                </div>
            </div>
        </div>
    )
}
