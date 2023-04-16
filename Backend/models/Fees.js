const mongoose = require('mongoose');
const { Schema } = mongoose;

const AnnualFeesSchema = new Schema({


        Type: {
          type: String,
          required: [true, "Please Enter Fees type"],
          // maxLength: [30, "Name cannot exceed 30 characters"],
          // minLength: [4, "Name should have more than 4 characters"],
        },
      
        amount: {
          type: String,
          required: [true, "Please Enter Amount"],
          // maxLength: [30, "Name cannot exceed 30 characters"],
          
          // minLength: [4, "Name should have more than 4 characters"],
        },
       
        UserName: {
          type: String,
          required: [true, "Please Enter UserName"],
          // maxLength: [30, "Name cannot exceed 30 characters"],
          
          // minLength: [4, "Name should have more than 4 characters"],
        },

        Address: {
          type: String,
          required: [true, "Please Enter Address"],
          // maxLength: [30, "Name cannot exceed 30 characters"],
          
          // minLength: [4, "Name should have more than 4 characters"],
        },
      
        
        createdAt: {
          type: String,
        
        },
        updateAt:{
            type: String,
            
          },
        
      
      });{timestamps:true};
      
    
    
    const annualFeesModel=mongoose.model("AnnualFees", AnnualFeesSchema);

  module.exports = annualFeesModel;