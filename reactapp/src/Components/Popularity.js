import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { set } from 'mongoose';


const Popularity = () => {
    const [movie, setmovie] = useState([]);
    const [avg, setavg] = useState();
    useEffect(() => {
        axios.get('http://localhost:8000/api/topmovies')
            .then((res) =>{
                setmovie(res.data)
                setavg(movie.rating/movie.numberOfRating)

                })},[])
                
    return (
        <>

            {movie.map((movies, idx)=>{
                return(
                    <div style={{display:'flex'}}>
                    <div style={{width:'300px',height:'50px',margin:'40px'}}>
                    <p key={idx}>{movies.name} </p>
                               <p>{movies.language}</p>
                               <p>{movies.year}</p>
                               <p>{movies.rating}</p>
                               <p>{avg}</p>
                    </div></div>
                )
            })}
        </>
    )
}

export default Popularity