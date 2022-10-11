import React from 'react'

export const Article = ({sno, articles}) => {

    let imageStyle={
        width: "50%"
    };

    let paraStyle={
        width: "60%"
    };

    console.log(sno, articles[sno]);
    return (
        <div className="container text-center">
            <h4 className="py-4">{articles[sno].title}</h4>
            <div className="container py-4" style={imageStyle}>
                <img src={articles[sno].image} className="img-fluid rounded"/>
            </div>
            <p className="container" style={paraStyle}>
                {articles[sno].desc}
            </p>
            <hr/>
            <p>
                NGO: {articles[sno].authorName}
            </p>
        </div>
    )
}
