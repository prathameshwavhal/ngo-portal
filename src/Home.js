import React, {useState} from 'react'
import { HomeCard } from './HomeCard';

export const Home = ({articles, changeSno, onDelete, sno}) => {
    var keys = Object.keys(articles);
    var len = keys.length;
    // console.log("Articles Length:",len);

    // function objectMap(object, mapFn) {
    //   return Object.keys(object).reduce(function(result, key) {
    //     result[key] = mapFn(object[key])
    //     return result
    //   }, {})
    // }
    
    // var newObject = objectMap(myObject, function(value) {
    //   return value * 2
    // })

    return (
        <div className="container py-3">
            <h3 className="my-3">
            Events
            </h3>
            {/* {len===0? "No Articles to Display":
            articles.map((article)=>{
                return (
                    <>
                        <HomeCard article={article} onDelete={onDelete}/>
                        <hr/>
                    </>
                )
            })
            } */}
            <center>
            <div className="row row-cols-1 row-cols-md-3 g-4" style={{width: "80%" }}>
            {/* <div className="container"> */}
            {len===0? "No Articles to Display":
            Object.keys(articles).map(function(key, index) {
                return (
                    <>
                        <HomeCard article={articles[key]} onDelete={onDelete} articles={articles} changeSno={changeSno}/>
                    </>
                )
              })
            }
            </div>
            </center>
        </div>
        // <p>Hello boy, your code sucks.</p>
    )
}
