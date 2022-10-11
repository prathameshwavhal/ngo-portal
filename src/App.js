import {Header} from "./Header"
import {Home} from "./Home"
import {About} from "./About"
import {AddArticle} from "./AddArticle"
import {Footer} from "./Footer"
import { Article } from "./Article"
import React,{useState,useEffect} from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initArticles;
  if(localStorage.getItem("articles")===null)
  {
    initArticles=[];
  }
  else
  {
    initArticles=JSON.parse(localStorage.getItem("articles"));
  }

  const addArticle = (authorName, title, desc, image) => {
    // console.log("This article has been added", title, desc);
    // let next;
    // if (articles.length == 0) {
    //     next = 1;
    // }
    // else {
    //     next =articles.length + 1;
    // }
    const myarticle = {
        // sno: next,
        authorName: authorName,
        title: title,
        desc: desc,
        image: image
    }
    
    setArticle([...articles, myarticle]);
    // setArticle(articles, myarticle);
  }

  const onDelete = (article) =>
    {
        console.log("I am on Delete of article:", article);
        setArticle(articles.filter((e)=>{
        return e!==article;
        }));
        localStorage.setItem("articles",JSON.stringify(articles));
    }

  const [articles, setArticle] = useState(initArticles);
  useEffect(() => {
    localStorage.setItem("articles",JSON.stringify(articles));
  }, [articles])

  let [sno,setSno] = useState(()=>{
    return 0;
  });
  // let currentArticle;
  function changeSno(now){
    console.log("called: ", now);
    setSno(sno=now);
    console.log(sno);
  }

  return (
    <>
      <Router>
        <Header articles={articles}/>

        <Routes>
        <Route exact path="/" element={<Home articles={articles} changeSno={changeSno} onDelete={onDelete} sno={sno}/>}/>

        <Route exact path="/about" element={<About/>}/>

        <Route exact path="/addarticle" element={<AddArticle addArticle={addArticle}/>}/>

        <Route exact path="/article" element={<Article sno={sno} articles={articles}/>}/>
        </Routes>

        <Footer/>
      </Router>
    </>
  );
}

export default App;
