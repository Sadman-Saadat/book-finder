import React, { useState, useEffect } from "react";
import { getMovieDetails } from "./../api/TMBDB";
import { Link } from 'react-router-dom';


const MovieDetails = (props) => {
    const [currentMovie, setCurrentMovie] = useState({});
    console.log(props.location.movie_id);

    useEffect(() => {
        getMovieDetails(props.location.movie_id, setCurrentMovie);
    }, [])

    const ImageURL = "https://image.tmdb.org/t/p/w500/" + currentMovie.poster_path;
    console.log(currentMovie);
    return (
        <div>
            <div class="col s12 m5">
                <div class="card">
                    <div class="card-image">
                        {currentMovie.poster_path == null ? (<img src={"https://picsum.photos/200/300"} alt="Hudai" />) :
                            (<img src={ImageURL} style={{ width: "100", height: "200" }} alt={"Movie Title"} />)}
                        <span class="card-title" style={{ fontFamily: "Arial", marginLeft: "10", paddingLeft: "20" }}>{currentMovie.original_title}</span>
                    </div>
                    <div class="card-content">
                        <p>{currentMovie.overview}</p>
                    </div>
                    <div class="card-action">
                        <Link to="/">Go to Search Page</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;