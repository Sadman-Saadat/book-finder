import React from 'react';
import { Link } from "react-router-dom";

const Book = (props) => {
    const ImageURL = props.book.volumeInfo.imageLinks;
    return (
        <div className="col s12 m3">
            <div className="card large">
                <div className="card-image" style={{ marginBottom: 10 }}>
                    {ImageURL === undefined ? (<img src={"https://picsum.photos/200/300"}
                        alt="hudai"
                        style={{ width: "100", height: "100" }} />) :
                        (<img src={props.book.volumeInfo.imageLinks.thumbnail} style={{ width: 245, height: 300 }} alt="Book Cover" />)}
                </div>
                <div>
                    <span className="card-title" style={{
                        color: "black",
                        fontSize: 18,
                        fontFamily: 'monospace',
                        position: 'absolute', marginTop: 10, marginLeft: 15, marginRight: 15
                    }}>
                        {props.book.volumeInfo.title}
                    </span>
                </div>
                <div className="card-content"  style={{marginTop: 70, marginLeft: -6}}>
                    <p style={{fontFamily:'cursive', color:'#11aabb'}}>{props.book.volumeInfo.authors}</p>
                </div>
                <div className="card-action" >
                    <Link to={{
                        pathname: "/book/" + props.title,
                        title: props.title,
                        author: props.author,
                        published: props.published,
                        image: props.image,
                        description: props.description,
                        props: props.props
                    }}
                    style={{
                        color:'#1ab1ad'
                    }}>See Details</Link>
                </div>
            </div>
        </div>
    )
}
export default Book;