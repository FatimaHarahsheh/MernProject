import React, { useState } from "react";
import "../static/css/SearchForm.css";  

const SearchForm = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState(0);
  const [language, setLanguage] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [result, setResult] = useState([]);
  const [anyMovies, setAnyMovies] = useState(false);
  
  const movies = [
    {
      name: "the my",
      poster:
        "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
      rating: 5,
      date: 2021,
      genre: ["adasdasd"],
      language: "arabic",
      numOfRatings: 7681,
    },
    {
      name: "the not as ",
      poster:
        "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
      rating: 2.6,
      date: 2021,
      genre: ["science fiction"],
      language: "english",
      numOfRatings: 89302,
    },
    {
      name: "the asd squad",
      poster:
        "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
      rating: 2.6,
      date: 2021,
      genre: ["adasdasd"],
      language: "arabic",
      numOfRatings: 12,
    },
    {
      name: "tell me",
      poster:
        "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
      rating: 2.6,
      date: 2021,
      genre: ["adasdasd"],
      language: "english",
      numOfRatings: 98,
    },
    {
      name: "the asd",
      poster:
        "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
      rating: 2.6,
      date: 2021,
      genre: ["horror", "science"],
      language: "hindi",
      numOfRatings: 123328,
    },
    {
      name: "the suicide squad",
      poster:
        "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
      rating: 1.6,
      date: 2021,
      genre: ["sleep", "plz"],
      language: "english",
      numOfRatings: 736,
    },
    {
      name: "the new squad",
      poster:
        "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
      rating: 9.6,
      date: 2021,
      genre: ["sleep", "plz"],
      language: "english",
      numOfRatings: 2000,
    },
    {
      name: "the squad",
      poster:
        "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
      rating: 6.6,
      date: 2021,
      genre: ["romance", "love"],
      language: "english",
      numOfRatings: 200,
    },
    {
      name: "the nothing squad",
      poster:
        "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
      rating: 7.6,
      date: 2001,
      genre: ["comedy"],
      language: "english",
      numOfRatings: 1210,
    },
    {
      name: " the squad",
      poster:
        "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
      rating: 4.6,
      date: 2091,
      genre: ["documentary", "comedy"],
      language: "english",
      numOfRatings: 92372,
    },
    {
      name: "The",
      poster:
        "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
      rating: 7,
      date: 2011,
      genre: ["action", "comedy"],
      language: "english",
      numOfRatings: 200,
    },
  ];

  const search = (e) => {
    e.preventDefault();
    console.log("searching");
    console.log(title);
    console.log(genre);
    console.log(rating);
    console.log(language);
    console.log(orderBy);

    let searchResults;
    if (
      title !== "" ||
      genre !== "" ||
      rating !== "" ||
      language !== "" ||
      orderBy !== ""
    ) {
      searchResults = movies.filter(
        (movie) => movie.name.toLowerCase().indexOf(title) > -1
      );

      if (genre !== "") {
        searchResults = searchResults.filter((movie) =>
          movie.genre.includes(genre)
        );
      }

      if (rating !== 0) {
        searchResults = searchResults.filter((movie) => movie.rating >= rating);
      }

      if (language !== "") {
        searchResults = searchResults.filter(
          (movie) => movie.language === language
        );
      }

      if (orderBy !== "") {
        if (orderBy === "date") {
          searchResults.sort((a, b) => b.date - a.date);
        } else if (orderBy === "popularity")
          searchResults.sort((a, b) => b.numOfRatings - a.numOfRatings);
        else {
          searchResults.sort((a, b) => b.rating - a.rating);
        }
      }
      if (searchResults) setAnyMovies(true);
      setResult(searchResults);
    } else {
      setAnyMovies(false);
    }
  };

  return (
    <div>
      <form className="search-form"  onSubmit={search}>
          <div className="search-box">
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="movie title "
        />
        <input type="submit" value="Search" />
        <br />
        <select onChange={(e) => setGenre(e.target.value)}>
          <option value="">Genre:</option>
          <option value="horror">horror</option>
          <option value="comedy">comedy</option>
          <option value="science">science</option>
          <option value="romance">romance</option>
          <option value="action">action</option>
        </select>
        <select onChange={(e) => setRating(e.target.value)}>
          <option value="">Rating:</option>
          <option value="9">9+</option>
          <option value="8">8+</option>
          <option value="7">7+</option>
          <option value="6">6+</option>
          <option value="5">5+</option>
          <option value="4">4+</option>
          <option value="3">3+</option>
          <option value="2">2+</option>
          <option value="1">1+</option>
        </select>
        <select onChange={(e) => setLanguage(e.target.value)}>
          <option value="">Language:</option>
          <option value="arabic">arabic</option>
          <option value="english">english</option>
          <option value="hindi">hindi</option>
        </select>
        <select onChange={(e) => setOrderBy(e.target.value)}>
          <option value="">Orderby:</option>
          <option value="date">release date</option>
          <option value="rating">rating</option>
          <option value="popularity">popularity</option>
        </select>
        </div>
      </form>
      <br />
      <br />
      <ul>
        {anyMovies ? (
          [
            result.map((movie, i) => {
              return (
                <li>
                  {movie.name} date:{movie.date} rate:{movie.rating} popularity:
                  {movie.numOfRatings}
                </li>
              );
            }),
          ]
        ) : (
          <p>no search results!</p>
        )}
      </ul>
      {console.log(result)}
      {console.log(anyMovies)}
    </div>
  );
};

export default SearchForm;
