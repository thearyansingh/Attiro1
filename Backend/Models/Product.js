import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
        type: Array,
        required: true,
      }, 
      subCategory:{
        type:String,
        required:true,
      },
    category:{
        type:String,
        required:true,
      },
      sizes: {
        type: Array,
        required: true,
      },
      bestSeller:{
     type:Boolean
      },
    date:{
        type:Number,
  
    }
  },
  { timestamps: true }
);

const productModel =mongoose.model.product||mongoose.model('Product', productSchema);

export default productModel;