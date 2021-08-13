import "../static/css/postereffect.css";
import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import "../static/css/top_5.css";
import axios from "axios";

const Top5 = () => {
    
  // let movies = [
  //   {
  //     name: "the suicide squad",
  //     poster:
  //       "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
  //     rating: 2.6,
  //     date: 2021,
  //   },
  //   {
  //     name: "the suicide squad",
  //     poster:
  //       "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
  //     rating: 2.6,
  //     date: 2021,
  //   },
  //   {
  //     name: "the suicide squad",
  //     poster:
  //       "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
  //     rating: 2.6,
  //     date: 2021,
  //   },
  //   {
  //     name: "the suicide squad",
  //     poster:
  //       "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
  //     rating: 2.6,
  //     date: 2021,
  //   },
  //   {
  //     name: "the suicide squad",
  //     poster:
  //       "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
  //     rating: 2.6,
  //     date: 2021,
  //   },
  //   {
  //     name: "the suicide squad",
  //     poster:
  //       "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
  //     rating: 2.6,
  //     date: 2021,
  //   },
  //   {
  //     name: "the new squad",
  //     poster:
  //       "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
  //     rating: 3.6,
  //     date: 2021,
  //   },
  //   {
  //     name: "the squad",
  //     poster:
  //       "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
  //     rating: 2.6,
  //     date: 2021,
  //   },
  //   {
  //     name: "the nothing squad",
  //     poster:
  //       "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
  //     rating: 7.6,
  //     date: 2001,
  //   },
  //   {
  //     name: " squad",
  //     poster:
  //       "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
  //     rating: 4.6,
  //     date: 2091,
  //   },
  //   {
  //     name: "thed",
  //     poster:
  //       "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
  //     rating: 7,
  //     date: 2011,
  //   },
  // ];
  const [movies, setmovies] = useState([]);
  const [averageofrating, setavg] = useState();

  useEffect(() => {
      axios.get("http://localhost:8000/api/topmovies" )
          .then(res => {setmovies(res.data)
            setavg(res.data.averageofrating);
          });
  }, [])

  return (
    <div className="top-5">
      <h1>trending now:</h1>
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
                                <p>rate: {String(averageofrating).substring(0, 3)} / 5</p>
                                <a href="#"></a>
                                </div></div>
                                    </SplideSlide>
          );
        })}
 </Splide></div> );
};

export default Top5;
