import React from "react";
import {Link} from "react-router-dom";

const BookDetails = (props) => {
    console.log("Book Details e achi vai "+props);
    return (<div>
        <div className="row">
            <div className="col s12 m7">
                <div className="card large">
                    <img
                        src={props.location.image}
                        alt=""
                        style={{ width: "200", height: "800" }}
                    />
                    <div></div>
                    <span className="card-title">{props.location.title}</span>
                    <div></div>
                    <span className="card-title">{props.location.author}</span>
                    <div></div>
                    <span className="card-title">{props.location.published}</span>

                    <div className="card-content">
                        <p>{props.location.description}</p>
                    </div>
                    <div className="card-action">
                        <Link to={{ pathname: "/", books: props.location.props }}>Go to search page!</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

};

export default BookDetails;