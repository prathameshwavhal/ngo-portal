import React, {useState} from 'react'

export const AddArticle = ({addArticle}) => {
    let containerStyle = {
        width: "60%",
        marginy: "auto"
    }

    const [authorName, setAuthorName] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc || !authorName || !image) {
            alert("No Field must be left blank.");
        }
        else {
            console.log(authorName, title, desc, image);
            addArticle(authorName, title, desc, image);
            setAuthorName("");
            setTitle("");
            setDesc("");
            setImage("");
            window.location.href = "/";
        }
    }

    return (
        <div className="container py-3" style={containerStyle}>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="authorName" className="form-label">Name of the NGO</label>
                    <input className="form-control" type="text" value={authorName} onChange={(e)=>{setAuthorName(e.target.value)}} id="authorName"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" id="title"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="desc" rows="7"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Add Cover Image URL</label>
                    <input className="form-control" type="text" value={image} onChange={(e)=>{setImage(e.target.value)}} id="image"></input>
                </div>
                <center><button type="submit" className="btn btn-primary">Submit</button></center>
            </form>
        </div>
    )
}
