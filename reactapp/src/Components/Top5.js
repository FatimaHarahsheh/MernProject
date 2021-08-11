import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import "../static/css/top_5.css";
const Top5 = () => {
    
  let movies = [
    {
      name: "the suicide squad",
      poster:
        "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
      rating: 2.6,
      date: 2021,
    },
    {
      name: "the suicide squad",
      poster:
        "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
      rating: 2.6,
      date: 2021,
    },
    {
      name: "the suicide squad",
      poster:
        "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
      rating: 2.6,
      date: 2021,
    },
    {
      name: "the suicide squad",
      poster:
        "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
      rating: 2.6,
      date: 2021,
    },
    {
      name: "the suicide squad",
      poster:
        "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
      rating: 2.6,
      date: 2021,
    },
    {
      name: "the suicide squad",
      poster:
        "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
      rating: 2.6,
      date: 2021,
    },
    {
      name: "the new squad",
      poster:
        "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
      rating: 3.6,
      date: 2021,
    },
    {
      name: "the squad",
      poster:
        "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
      rating: 2.6,
      date: 2021,
    },
    {
      name: "the nothing squad",
      poster:
        "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
      rating: 7.6,
      date: 2001,
    },
    {
      name: " squad",
      poster:
        "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
      rating: 4.6,
      date: 2091,
    },
    {
      name: "thed",
      poster:
        "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
      rating: 7,
      date: 2011,
    },
  ];

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
        {movies.map((m, i) => {
          return (
            <SplideSlide>
              <img src={m.poster} alt="Image_2" />
              <p>{m.name}</p>
              <p>{m.date}</p>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Top5;
