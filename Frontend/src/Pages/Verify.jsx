import React, { useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { toast } from 'react-toastify';
import axios from 'axios';
const Verify = () => {
  const {Navigate,token,setCartItems}=useContext(ShopContext);
  const[Params,getParams]=useSearchParams();
  const success=Params.get("success")
  const orderId=Params.get("orderId")
const verifyhandler=async()=>{
  try {
    
    if(!token){
      return null
    }

    const response=await axios.post("https://attiro1.onrender.com/api/orders/verify",
{success,orderId},   
{ headers: { Authorization: token } }
    )
    if(response.data.success){
      Navigate("/Myorder")
      setCartItems({})
      toast.success("Payment done")
    }
    else{
      Navigate('/')
      toast.error("Payment failed")
    }
  } catch (error) {
   console.log(error) 
  }
}
useEffect(() => {
verifyhandler()
}, [])


    
  return (
    <div>
      verify
    </div>
  )
}

export default Verify
