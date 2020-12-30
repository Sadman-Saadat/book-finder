import React from 'react';
import { Link } from "react-router-dom"

const Book = (props) => {
    return (
        <div className="col s12 m3" >
            <div className="card huge" >
                <div className="card-image">
                    {props.book.volumeInfo.imageLinks === undefined ? (<img src={"https://picsum.photos/200/300"} style={{ width: 200, height: 300 }} alt="Hudai" />) :
                        (<img src={props.book.volumeInfo.imageLinks.thumbnail} style={{ width: 245, height: 300 }} alt={"Book Title"} />)}
                </div>
                <div>
                    <span className="card-title" style={{ fontFamily: "Arial", marginLeft: 10, color: "black" }}>{props.book.volumeInfo.title}</span>
                </div>
                <div className="card-content">
                    <p>{props.book.volumeInfo.authors}</p>
                </div>
                <div className="card-action">
                    <Link to={{
                        pathname: "/book/" + props.title,
                        title: props.title,
                        author: props.author,
                        published: props.published,
                        image: props.image,
                        description: props.description,
                        props: props.props,
                        link: props.book.volumeInfo.previewLink
                    }}>See Details</Link>
                </div>
            </div>
        </div>
    )
}
export default Book;