import {useState} from 'react'
function About(){
    const [city,setCity]=useState("vijayawada");
  
    return(
        <div>
            <h2>{city}</h2>
            {/*this is about page*/}
            <input onChange={(e)=>setCity(e.target.value)}/>
            <button onClick={()=>console.log(city)}>submit</button>
            
            
        </div>
    )
}
export default About