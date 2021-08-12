import React, { useState } from "react";
import "../static/css/SearchForm.css";
import { Button } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
        },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  const theme = createTheme({
    palette: {
      secondary: {
        main: "#333333",
      },
      primary: {
        light: "#ff7961",
        main: "#333333",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });
  return (
    <div>          <ThemeProvider theme={theme}>
      <form className="search-form" onSubmit={search}>
        <div className="top-box">
          <div className="search-box">
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder=" "
            />

            {/* <button type="reset"></button> */}
          </div>
          {/* <input type="submit" value="Search" /> */}
            <Button
              type="submit"
              variant="contained"
              style={{ height: "50px", margin: " auto 0px auto 20px" }}
              color="secondary"
            >
              Search
            </Button>
        </div>
        <br />
        <div className="select-box">

          <FormControl className={classes.formControl}>
            <InputLabel  id="demo-simple-select-label">Genre:</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={(e) => setGenre(e.target.value)}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="horror">horror</MenuItem>
              <MenuItem value="comedy">comedy</MenuItem>
              <MenuItem value="science">science</MenuItem>
              <MenuItem value="romance">romance</MenuItem>
              <MenuItem value="action">action</MenuItem>
            </Select>
          </FormControl>


          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Rating:</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
               onChange={(e) => setRating(e.target.value)}>
          <MenuItem value="">None</MenuItem>
            <MenuItem value="9">9+</MenuItem>
            <MenuItem value="8">8+</MenuItem>
            <MenuItem value="7">7+</MenuItem>
            <MenuItem value="6">6+</MenuItem>
            <MenuItem value="5">5+</MenuItem>
            <MenuItem value="4">4+</MenuItem>
            <MenuItem value="3">3+</MenuItem>
            <MenuItem value="2">2+</MenuItem>
            <MenuItem value="1">1+</MenuItem>
          </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">language:</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
               onChange={(e) => setLanguage(e.target.value)}>
            <MenuItem value="">None</MenuItem>
            <MenuItem value="arabic">arabic</MenuItem>
            <MenuItem value="english">english</MenuItem>
            <MenuItem value="hindi">hindi</MenuItem>
          </Select>
          </FormControl>


          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">orderBy:</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
             onChange={(e) => setOrderBy(e.target.value)}>
            <MenuItem value="">None</MenuItem>
            <MenuItem value="date">release date</MenuItem>
            <MenuItem value="rating">rating</MenuItem>
            <MenuItem value="popularity">popularity</MenuItem>
          </Select>
          </FormControl>


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
      </ThemeProvider>

    </div>
  );
};

export default SearchForm;
