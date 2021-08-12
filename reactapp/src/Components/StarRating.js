// import React,{useState} from 'react'
// import {FaStar} from 'react-icons/fa'
// const StarRating = () =>{
//     const[rating,setRating]=useState(null);
//     const[hover,setHover]=useState(null);

//     return (
//         <div>
//          {[...Array(5)].map((star,i) =>  {
//              const ratingValue= i + 1;
//        return (
//             <label>
//                 <input style={{display:'none'}}
//                 type="radio" name="rating"
//                 value={ratingValue} onClick={()=>setRating(ratingValue)}/>
//                 <FaStar style={{cursor:'pointer',  transition: 'width 50s',transform: 'translate(-20px)'}}   color={ratingValue <= (hover ||rating) ?"#ffc107":"#e4e5e9"} size={100} onMouseEnter={() => setHover(ratingValue)} onMouseOut={() => setHover(null)} />
//             </label>
//        );
// })}
//     <p>The Movie Rating Is :{rating}</p>
//     </div>
//     );

// };

// export default StarRating;
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { Animated } from "react-animated-css";

const StarRating = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [movie, setmovie] = useState({});
  const [name, setname] = useState("zsewq");
  const [numberOfRating, setnum] = useState();
  const [rater, setrater] = useState();
  const [rerender, setrerender] = useState(false);
  const [sarating, setrating] = useState();
  const [transfer, settransfer] = useState(false);
  const id = "6113dd315f33e71f982c907d";
  useEffect(() => {
    axios.get("http://localhost:8000/api/movie/" + id).then((res) => {
      setmovie(res.data);
      // setname(res.data.name)
      setnum(res.data.numberOfRating);
      setrating(res.data.rating);
      console.log(res.data._id);
    });
    setrerender(false);
    setRating(sarating / numberOfRating);
  }, [rerender]);
  
  const updaterate = (rating, numberOfRating) => {
    axios
      .put("http://localhost:8000/api/edit/" + id, {
        name,
        rating,
        numberOfRating,
      })
      .then((res) => setrerender(true));
  };
  const moviecaster = () => {
    if (transfer === false) {
      settransfer(true);
    } else settransfer(false);
  };
  return (
    <div style={{ width: "300px", marginLeft: "50px" }}>
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
                updaterate(ratingValue + sarating, numberOfRating + 1);
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
              onMouseOut={() => setHover(null)}
            />
          </label>
        );
      })}
      <p>The Movie Rating Is :{rating}</p>
      <h1>{movie.rating}</h1>
      <h1>{movie.name}</h1>
      <h1>{rater}</h1>
      <a href="#" onClick={() => moviecaster()}>
        movie cast
      </a>
      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        isVisible={transfer}
      >
        <div>hello world ;)</div>
      </Animated>
    </div>
  );
};

export default StarRating;
