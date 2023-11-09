import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

const useMenu = ()=>{
    // const [loading, setLoading] = useState(true);

    // const [menu,setMenu] = useState([])
  
    // useEffect(()=>{
    //   fetch('https://bistory-server.onrender.com/menu')
    //   .then(res=>res.json())
    //   .then(data=>{
    //     setMenu(data);
    //    setLoading(false);
    // })

    // },[])
    // return[menu,loading]

    const {data: menu = [], isLoading: loading, refetch} = useQuery({
      queryKey: ['menu'],
      queryFn: async() => {
          const res = await fetch('https://bistory-server.onrender.com/menu');
          return res.json();
      }
  })

  return [menu, loading, refetch]
}

export default useMenu