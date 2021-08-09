import React,{useState} from 'react'
import {FaStar} from 'react-icons/fa'
const StarRating = () =>{
    const[rating,setRating]=useState(null);
    const[hover,setHover]=useState(null);

    return (
        <div>
         {[...Array(5)].map((star,i) =>  { 
             const ratingValue= i + 1;
       return (
            <label>
                <input style={{display:'none'}} 
                type="radio" name="rating" 
                value={ratingValue} onClick={()=>setRating(ratingValue)}/>
                <FaStar style={{cursor:'pointer',  transition: 'width 50s',transform: 'translate(-20px)'}}   color={ratingValue <= (hover ||rating) ?"#ffc107":"#e4e5e9"} size={100} onMouseEnter={() => setHover(ratingValue)} onMouseOut={() => setHover(null)} />
            </label>
       );
})}
    <p>The Movie Rating Is :{rating}</p>
    </div>
    );

};  

export default StarRating;