import "./watch.css";
import StarRating from "../../Components/StarRating";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
export default props => { 
  const [movie,setmovie] = useState([]);
  const [loaded,setLoaded]=useState(false);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/movie/${props.id}`).then((res) => {
      setmovie(res.data);
      setLoaded(true);
      console.log(res.data);
          });
  }, []);
  return (
    <>
    
    {loaded &&
    <div>
         <StarRating movieID={movie._id} /> //4
    <div className="vid-desc">
      <div className="video-box">
        <Splide
          options={{
            rewind: true,
            perPage: 1,
            perMove: 1,
            gap: "0.5rem",
            autoplay: false,
            pauseOnHover: false,
            resetProgress: false,
            arrows: "slider",
            speed: 400,
            interval: 2000,
          }}
        >
          <SplideSlide>
            <iframe
              id="player"
              src="https://www.youtube.com/embed/tnLfbN8mKbs?enablejsapi=1&mute=1"
              title="DCT introduction video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </SplideSlide> 
           {movie.images.map((m, i) => {
            return (
              <SplideSlide>
                <img src={m} alt="Image_2" width="100%" height="100%" />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      <div className="desc">
        <p>{movie.description}</p>
      </div>
    </div>
    </div> }
    
 
</> 
 );
}
