import "../static/css/demo.css";
import "../static/css/normalize.css";
import "../static/css/set1.css";
import "../static/css/set2.css";

import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { Animated } from "react-animated-css";

const Movieposter =(props) =>{
    const [movies, setmovies] = useState([]);
    axios.get("http://localhost:8000/api/movies" ).then((res) => {
        setmovies()



    return(


    )
}

export default Movieposter