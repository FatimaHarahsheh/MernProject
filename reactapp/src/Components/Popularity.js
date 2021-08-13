import React,{useState,useEffect} from 'react'
import axios from 'axios'


const Popularity = () => {
    const [movies, setmovie] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/topmovies')
            .then((res) =>{
                setmovie(res.data)

                })},[])
                
    return (
        <>
                <div style={{width:"1200px"}}>                 
                <div style={{ display:'flex',justifyContent:'space-evenly' ,margin:'10px' ,width:"1200px",flexWrap:'wrap'}}>


            {movies.map((movie, idx)=>{
                return(
                               <figure className="imghvr-push-up" style={{width:'300px',height:'300px',margin:'20px'}} >
                                <img src={movie.poster} style={{width:'300px',height:'300px'}} />
                                <figcaption>
                                <p>{movie.name}</p>
                                <p>{movies.year}</p>

                                <p>rate: {movie.rating}/5</p>
                                </figcaption>
                                <a href="#"></a>
                            </figure>
                   
                )
            })}
        </div>   </div></>
    )
}

export default Popularity