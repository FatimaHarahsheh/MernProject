import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { Animated } from "react-animated-css";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import "../static/css/CastingStyle.css"
export default props => {  ///////5
  const {movieID} = props/////6
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [movie, setmovie] = useState({});
  const [numberOfRating, setnum] = useState();
  const [rerender, setrerender] = useState(false);
  const [averageofrating, setavg] = useState();
  const [transfer, settransfer] = useState(false);
  const [casting, setcasing] = useState({});
  const [wed,setwed] = useState("90px")
  // const [name,setName]=useState("");
  useEffect(() => {
    axios.get(`http://localhost:8000/api/movie/${movieID}`).then((res) => {///7
      setmovie(res.data);
      // setName(res.data.name)
      setnum(res.data.numberOfRating);
      setRating(res.data.rating);
      console.log(res.data._id);
      setavg(res.data.averageofrating);
      setcasing(res.data.casting)
      setrerender(false);
    });
  }, [rerender]);

  const updaterate = (rating, numberOfRating) => {
    axios
      .put(`http://localhost:8000/api/edit/${movieID}`, {
        rating,
        numberOfRating,
        averageofrating: rating / numberOfRating
      })
      .then((res) => setrerender(true));
  };
  
  return (

    <div >
      <div style={{ display: "flex",width:'500px' }}>
        <img src={movie.poster} style={{ width: "280px", height: "350px", margin: "10px",background:'none' }} />
        < div >

          <div style={{ width: "500px",background:'red',borderRadius:'5%' }}>
            <h1>Movie Name: {movie.name}</h1>
            <h3>Movie Language: {movie.language}</h3>
            <h3>Relase Date: {movie.year}</h3>
            <h3 >The Movie Rating Is :{String(averageofrating).substring(0, 3)} / 5 </h3>

         
          <div style={{ width: "300px", marginLeft: "50px", display: "flex", }}>

            <div>
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <label>
                    <input
                      style={{ display: "none" }}
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => {
                        updaterate((ratingValue + rating), numberOfRating + 1);
                      }}
                    />
                    <FaStar
                      style={{
                        cursor: "pointer",
                        transition: "width 50s",
                        transform: "translate(-20px)",
                      }}
                      color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                      size={20}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseOut={() => setHover(ratingValue)}
                    />
                  </label>
                );
              })}
              


            </div>
          </div>
          <br /> <br /> <br /> <br /> <br /> <br />  
          </div>
        
          <div className="dropdown" style={{marginTop:'-50px'}}>
                <button type="button" class="btn btn-outline-secondary">Movie Cast</button>
                <div class="dropdown-content">
                <div style={{ display: 'flex' }}>
              <img src={casting.castimg1} className="actor" />
              <h3 className="fonter">{casting.actorone}</h3></div>
              <div style={{ display: 'flex' }}>
              <img src={casting.castimg2} className="actor" />
              <h3 className="fonter">{casting.actortwo}</h3></div>
              <div style={{ display: 'flex' }}>
              <img src={casting.castimg3} className="actor" />
              <h3 className="fonter">{casting.actorthree}</h3></div>
              <div style={{ display: 'flex' }}>
              <img src={casting.castimg4} className="actor" />
              <h3 className="fonter">{casting.actorfour}</h3></div>
              <div style={{ display: 'flex' }}>
              <img src={casting.castimg5} className="actor" />
              <h3 className="fonter">{casting.actorfive}</h3></div>
              
                </div>
              </div>
         
        </div>
      </div>
      <div>
      

        

      </div>
    </div>

  );
};

