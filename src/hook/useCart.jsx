import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Page/Context/AuthProvider';

const useCart = () => {
    const {user} = useContext(AuthContext)
    const {isLoding, data: cart = []} = useQuery({
        queryKey:['cart',user?.email],
        queryFn : async ()=>{
            const res = await fetch(`http://localhost:5000/carts?email= ${user.email}`
        )
        return res.json()
        }
      
    

    })
    return [cart,isLoding]
    

}
       

export default useCart;