import "../static/css/postereffect.css";
import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import "../static/css/top_5.css";
import axios from "axios";

const Top5 = (props) => {
  const [movies,setmovies] = useState([])
  const [averageofrating, setavg] = useState();

  // this in view page

  useEffect(() => {
      axios.get("http://localhost:8000/api/topmovies" )
          .then(res => {setmovies(res.data)
            setavg(res.data.averageofrating);
          });
  }, [])

  return (
    <div className="top-5">
      <h1>Top 5 Movies:</h1>
      <Splide
        options={{
          rewind: true,
          perPage: 5,
          perMove: 1,
          gap: "0.5rem",
          autoplay     : true,
          pauseOnHover : false,
          resetProgress: false,
          arrows       : 'slider',
          speed:400,
          interval:2000
        }}
      >
        {movies.slice(0, 5).map((movie, i) => {
          return (
            <SplideSlide>
    <div class="hovereffect">

                            <img class="img-responsive"  src={movie.poster} style={{width:'350px',height:'350px'}} />
                            <div class="overlay">
                                <p>{movie.name}</p>
                                <p>rate: {String(movie.averageofrating).substring(0, 3)} / 5</p>
                                <br /><br /><br /><br /><br /><br />
                                <a href= {`/movie/${movie._id}`} > more details </a>
                                </div></div>
                                    </SplideSlide>
          );
        })}
 </Splide></div> );
};

export default Top5;
