import "../static/css/postereffect.css";
import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import "../static/css/top_5.css";
import axios from "axios";

const Movieposter = (props) => {
  const [movies, setmovies] = useState([]);
  const [averageofrating, setavg] = useState();
  const [loaded,setLoaded]= useState(false)

  useEffect(() => {
    axios.get("http://localhost:8000/api/movies").then((res) => {
      setmovies(res.data);
      setLoaded(true)
      setavg(res.data.averageofrating);
    });
  }, []);

  return (
    <div>
      {loaded && (
        <div class="hovereffect" style={{width:"250px"}}>
          <img
            class="img-responsive"
            src={movies[0].poster}
            style={{ width: "260px", height: "350px" }}
            alt=""
          />
          <div class="overlay">
            <p>{movies[0].name}</p>

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
      )}
    </div>
  );
};

export default Movieposter;
