import { useEffect, useState } from "react";

const useMenu = ()=>{
    const [loading, setLoading] = useState(true);

    const [menu,setMenu] = useState([])
  
    useEffect(()=>{
      fetch('http://localhost:5000/menu')
      .then(res=>res.json())
      .then(data=>{
        setMenu(data);
       setLoading(false);
    })

    },[])
    return[menu,loading]
}

export default useMenu