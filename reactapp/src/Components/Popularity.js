import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Top5 from './Top5'
import '../static/css/imagehover.css'
const Popularity = () => {
    const [movies, setmovie] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/topmovies')
            .then((res) =>{
                setmovie(res.data)

                })},[])
                
    return (
        <>
        <Top5 />

                <div style={{width:"1500px",backgroundColor: 'rgba(24, 22, 22, 0.8',marginLeft:'30px'}}>  
                <h1 style={{color:'white'}}>Trending Now</h1>
               
                <div style={{ display:'flex',justifyContent:'space-evenly' ,margin:'10px' ,width:"1500px",flexWrap:'wrap'}}>

            {movies.map((movie, idx)=>{
                return(
                               <figure className="imghvr-push-up" style={{width:'300px',height:'300px',margin:'20px'}} >
                                <img src={movie.poster} style={{width:'300px',height:'300px'}} />
                                <figcaption>
                                <p>{movie.name}</p>
                                <p>{movies.year}</p>

                                <p>rate: {String(movie.averageofrating).substring(0, 3)}/5</p>
                                </figcaption>
                                <a href= {`/movie/${movie._id}`} > </a>
                            </figure>
                   
                )
            })}
        </div>   </div></>
    )
}

export default Popularity