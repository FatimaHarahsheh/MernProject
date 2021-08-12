import React, { useState } from "react";

import "../static/css/BrowseSearch.css";

const BrowseResult = () => {
  const [limit, setLimit] = useState(4);

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
    <div className="search">
      <h2 style={{marginLeft:'50px'}}>search results:</h2>
      <br />
      <div className="search-list">
        {movies ? (
          [
            movies
              .filter((item, idx) => idx < limit)
              .map((m, i) => {
                return (
                  <div className="item">
                    <img src={m.poster} alt="Image_2" />
                    <p>{m.name}</p>
                    <p>{m.date}</p>
                  </div>
                );
              }),
          ]
        ) : (
          <p>no search results!</p>
        )}
      </div>

      <br />
      <div style={{ width: "100%" }}>
        <button style={{marginLeft:'80%'}}
          onClick={() => {
            setLimit(limit + 4);
          }}
        >
          More
        </button>
      </div>
    </div>
  );
};

export default BrowseResult;
