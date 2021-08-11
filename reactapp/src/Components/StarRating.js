import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Animated} from "react-animated-css";
import {FaStar} from 'react-icons/fa'
const StarRating =() => {
    const[rating,setRatingg]=useState(null);
    const[avgrating,setRating]=useState(null);
    const[incnum,setIncnum]=useState(null);
    const[hover,setHover]=useState(null);
    const[name,setName]=useState("");
    const[poster,seposter]=useState("");
    const[images,setimages]=useState("");
    const[language,setlanguage]=useState("");
    const[genre,setgenre]=useState([]);
    const[cast,setcast]=useState();
    const [movie,setMovie]=useState({});
    const [render,setrender]=useState(false)
    const[transfer,setTransfer]=useState(false)
    const[avg,setavg]=useState(avgrating)
    let id='6113608a24cdb7237c60a655';
 
    useEffect(() => {
        axios.get("http://localhost:8000/api/movie/"+id)
            .then(res => {setMovie(res.data)
            // console.log(res.data._id)
            setName(res.data.name)
            seposter(res.data.poster)
            setimages(res.data.images)
            setlanguage(res.data.language)
            setgenre(res.data.genre)
            setcast(res.data.cast)
            setIncnum(res.data.numberOfrating)
            setRating(res.data.rating)
            console.log(res.data.rating)
            setrender(false)
            // setavg((avgrating/incnum))
        })
    }, [render])

    const UpdateRating =(rating)=>{
        console.log(incnum+1)
        let hello=incnum+1
        setIncnum(hello+1)
        console.log(incnum)
        console.log(rating)
        axios.put('http://localhost:8000/api/edit/' +id,{name,poster,images,language,genre,cast,rating,incnum})
        .then(setrender(true))

    }
    const movieCaststate = (e) =>{
        // e.preventdefault()
                if (transfer===true){
            setTransfer(false)
        }else{setTransfer(true)}
    }


    return (
        <div >

        
        <h1>{movie.name}</h1>
        <p>{movie.year}</p>
        <p>{movie.genre}</p>
        <p>{movie.language}</p>

        <div>
         {[...Array(5)].map((star,i) =>  { 
             const ratingValue= i + 1;
       return (
            <label>
                <input style={{display:'none'}} 
                type="radio" name="rating" 
                value={ratingValue} onClick={()=>UpdateRating(((avgrating+ratingValue)))}/>
                <FaStar style={{cursor:'pointer',  transition: 'width 50s',transform: 'translate(-20px)'}}   color={ratingValue <= (hover ||rating) ?"#ffc107":"#e4e5e9"} size={30} onMouseEnter={() => setHover(ratingValue)} onMouseOut={() => setHover(null)} />
            </label>
       );
})}
    <p>The Movie Rating Is :{avgrating}</p>
    <a href="#" onClick={()=> movieCaststate()}>Movie Cast</a>
    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={transfer}>
        <div>
            hello world ;)
        </div>
    </Animated>
    </div> 
    </div>
     
    );

};  

export default StarRating