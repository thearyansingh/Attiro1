import Orders from "../Models/Order.js"
import User from "../Models/User.js";
import Stripe from "stripe"

const stripe=Stripe(process.env.STRIPE_SECRETKEY)
//for the COD orders
 
const deliveryCharge=10;
const currency='inr'

const CODorders=async(req,res)=>{
    try {
const {userId,address,amount,items}=req.body
// const date = new Date(Date.now());

const userData={
    userId,
    address,
    amount,
    items,
    paymentMethod:"COD",
    payment:false,
    date:Date.now()
}
const newOrder=new Orders(userData);
await newOrder.save();
await User.findByIdAndUpdate(userId,{cartData:{}})
res.status(200).json({success:true,message:"Cash on delivery order"})
  
    } catch (error) {
      res.status(500).json({success:false,message:"server error "})  
    }
}
//for the  stripe payment gateway
const StripePayment=async(req,res)=>{
try {
    const {userId,address,amount,items}=req.body
    const {origin}=req.headers

    // const date = new Date(Date.now());
    
    const orderData={
        userId,
        address,
        amount,
        items,
        paymentMethod:"Stripe",
        payment:false,
        date:Date.now()
    }

   

    const newOrder=new Orders(orderData);
    await newOrder.save();
    console.log(newOrder);
    
    const line_items=items.map((item)=>({
price_data:{
    currency:currency,
    product_data:{
        name:item.name,
    },
    unit_amount:item.price * 100,   
},
quantity:item.quantity
    }))
    line_items.push({
        price_data:{
            currency:currency,
            product_data:{
                name:"delivery charge",
            },
            unit_amount:deliveryCharge * 100,   
        },
        quantity:1 
    }) 
    console.log(line_items);
    
        // User selects items and proceeds to checkout.

// Backend (StripePayment function) creates a Stripe Checkout session.

// Stripe generates a session URL and sends it back to the frontend.

// The frontend redirects the user to this URL.

// User completes the payment on Stripe's page.

// Stripe redirects the user to either:

// success_url (if payment is successful).

// cancel_url (if payment fails or is canceled).

// The backend verifies the payment and updates the order status.
const session=await stripe.checkout.sessions.create({    

    success_url:`${origin}/verify?success=true&orderId=${newOrder._id}`,
    cancel_url:`${origin}/verify?success=false&orderId=${newOrder._id}`,
    line_items,
    mode:"payment",

})

res.json({success:true, session_url:session.url})

} catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong", error: error.message })
}

   

}
//verify payment
const verifyPayment=async(req,res)=>{
try {
 const{userId,success,orderId}=req.body;
if(success){
    await Orders.findByIdAndUpdate(orderId,{payment:true})
await User.findByIdAndUpdate(userId,{cartData:{}})
res.json({success:true, message:"payment verified"})
 
}
else{
    await Orders.findByIdAndDelete(orderId)
    res.json({message:"payment failed"})
}

} catch (error) {
   
  res.json({success:false, message:"something Went wrong"})  
}
}


//for the  razorpay payment gateway
const razorpayPayment=async(res,req)=>{

}

//for all the orders on Admin panel
const Allorders = async (req, res) => {
    try {
      const orders = await Orders.find({});
      res.status(200).json({ success: true, orders });
    } catch (error) {
      console.error("Error fetching orders:", error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  };
  

//user total orers
const singleOrder = async (req, res) => {
    try {
        const { userId } = req.body;
        
        if (!userId) {
            return res.status(400).json({ success: false, message: "User ID is required" });
        }

        const cartUser = await Orders.find({ userId });

        res.status(200).json({ success: true, message: "Total orders", cartUser });
    } catch (error) {
        console.error("Server error:", error); // Improved error logging
        res.status(500).json({ success: false, message: "Something went wrong" });
    }
};


//for the orderStatus
const orderStatus=async(req,res)=>{
    try {
const {_id, status}=req.body
const updated=await Orders.findByIdAndUpdate(_id,{status:status});
if(!updated){
    res.json({message:"orders not Found"})

}
res.json({success:true,message:"status updated sucessfully"})
  
    } catch (error) {
    
       res.json({message:"something went Wrong"}) 
    }

}
 export {CODorders,StripePayment,razorpayPayment,Allorders,singleOrder,orderStatus,verifyPayment}

