import { useEffect } from "react";
import { useState } from "react";


const Internatinaltime = () => {
    //  internation tiem 
      const [time,setTime] =useState(new Date())


      useEffect(()=>{
          setInterval(()=>setTime(new Date()),1000)
      },[])
    return (
        <div>
            <p>tiem:{time.toLocaleTimeString()}</p>
        </div>
    );
};

export default Internatinaltime;