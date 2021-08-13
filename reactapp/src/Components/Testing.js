import React,{useState} from 'react'
import "../static/css/CastingStyle.css"

const Testing = () => {
    const [state, setstate] = useState(false)
//   const circle = (".circle").hover(() =>{
//         // if mouse hover then add .flipping class
//        (this).addClass("flipping");
     
//    },function(){
//        // if mouse unhover then remove the .flipping class
//        (this).removeClass("flipping");
//    });

    return (
        <div class="container">
  
  <div class="circle">
    <div class="front" onMouseEnter={()=>setstate(true)} display={state} >
      <img width="300" height="300" src="http://mrg.bz/NtMdlB" />
    </div>
    <div class="back" display="hidden">
      <p>
         Put your content <br /> Here
      </p>
    </div>
  </div>
      
      
</div>
    
    )
}

export default Testing
