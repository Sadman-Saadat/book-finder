import React from 'react';
import { Link } from "react-router-dom"

const Book = (props) => {
    return (
        <div className="col s12 m3">
            <div className="card">
                <div className="card-image">
                    {props.book.volumeInfo.imageLinks === undefined ? (<img src={"https://picsum.photos/200/300"} style={{ width: "100", height: "100" }} alt="Hudai" />) :
                        (<img src={props.book.volumeInfo.imageLinks.thumbnail} style={{ width: "100", height: "100" }} alt={"Book Title"} />)}
                </div>
                <div>
                    <span className="card-title" style={{ fontFamily: "Arial", margin: "10", padding: "20", color: "black" }}>{props.book.volumeInfo.title}</span>
                </div>
                <div className="card-content">
                    <p>{props.book.volumeInfo.authors}</p>
                    <p>{props.book.volumeInfo.publishedDate}</p>
                </div>
                <div className="card-action">
                    <Link to={{
                        pathname: "/book/" + props.title,
                        title: props.title,
                        author: props.author,
                        published: props.published,
                        image: props.image,
                        description: props.description,
                        props: props.props
                    }}>See Details</Link>
                </div>
            </div>
        </div>
    )
}
export default Book;