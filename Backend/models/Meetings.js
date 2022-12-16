const mongoose = require('mongoose');
const { Schema } = mongoose;


const meetingsSchema = new Schema({

       
        agenda: {
          type: String,
          required: [true, "Please Enter Meetings Agenda"],
          // maxLength: [30, "Name cannot exceed 30 characters"],
          // minLength: [4, "Name should have more than 4 characters"],
        },
      
        date: {
          type: Date,
          required: [true, "Please Enter Meetings Date"],
          // maxLength: [30, "Name cannot exceed 30 characters"],
          
          // minLength: [4, "Name should have more than 4 characters"],
        },
       
        time: {
          type: String,
          required: [true, "Please Enter Meetings Time"],
          // minLength: [6, "Password should be greater than 8 characters"],
          // select: false,
        },
        place: {
            type: String,
            required: [true, "Please Enter Meeting Place"],
            // minLength: [6, "Password should be greater than 8 characters"],
            // select: false,
          },
      
        
        createdAt: {
          type: Date,
          default: Date.now,
        },
        updateAt:{
            type: Date,
            default: Date.now,
          },
        
      
      });{timestamps:true};
      
    
    
    const meetingsModel=mongoose.model("Meetings", meetingsSchema);

  module.exports = meetingsModel;