import "../static/css/postereffect.css";
import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import "../static/css/top_5.css";
import axios from "axios";

const Movieposter = () => {
  const [averageofrating, setavg] = useState();
  const [loaded, setLoaded] = useState(false)

  const [movie, setmovies] = useState([]);
  useEffect(() => {
      axios.get("http://localhost:8000/api/movies" )
          .then(res => setmovies(res.data));
  }, [])
  return (
    <>
    <h1>hello</h1>
      {/* {movie.map((movies, i) => {
        <div class="hovereffect" style={{ width: "250px" }}>
          <img
            class="img-responsive"
            src={movies.poster}
            style={{ width: "260px", height: "350px" }}
            alt=""
          />
          <div class="overlay">
            <p>{movies.name}</p>

            <p>rate: {String(averageofrating).substring(0, 3)} / 5</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <a
              href="#"
              style={{
                padding: "1em 1.5em",
                minWidth: "300px",
                height: "200px",
                textDecoration: "none",
                border: "1px solid black",
                background: "gray",
                borderRadius: "5%",
              }}
            >
              more details
            </a>
          </div>
        </div>
      })} */}
          return (
            <>
        <h1>trending now:</h1>
       
          {movie.map((movie, i) => {
            return (
              <div>
      <div class="hovereffect">
  
                              <img class="img-responsive"  src={movie.poster} style={{width:'350px',height:'350px' }} />
                              <div class="overlay">
                                  <p>{movie.name}</p>
                                  <p>rate: {movie.rating}/5</p>
                                  <a href= {`/movie/${movie._id}`} > more details </a>
                                  </div></div></div>
            );
          })} </>
 );

  

    </>
  );
}

export default Movieposter;
