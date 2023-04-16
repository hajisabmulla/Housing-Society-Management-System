const mongoose = require('mongoose');
const { Schema } = mongoose;
const moment = require('moment');

let now = moment().format('MMMM Do YYYY, h:mm:ss a');

const secretarySchema = new Schema({

       
        name: {
          type: String,
          required: [true, "Please Enter Your name"],
          // maxLength: [30, "Name cannot exceed 30 characters"],
          // minLength: [4, "Name should have more than 4 characters"],
        },
      
        username: {
          type: String,
          required: [true, "Please Enter Your username"],
          // maxLength: [30, "Name cannot exceed 30 characters"],
          
          // minLength: [4, "Name should have more than 4 characters"],
        },
       
        password: {
          type: String,
          required: [true, "Please Enter Your Password"],
          // minLength: [6, "Password should be greater than 8 characters"],
          // select: false,
        },
      
        
        createdAt: {
          type: String,
          default: now,
        },
        updateAt:{
            type: String,
            default: now,
          },
        
      
      });{timestamps:true};
      
    
    
    const secretaryModel=mongoose.model("Secretary", secretarySchema);

  module.exports = secretaryModel;