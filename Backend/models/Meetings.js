const mongoose = require('mongoose');
const { Schema } = mongoose;

const moment = require('moment');
const { parseZone } = require('moment');

let now = moment().format('MMMM Do YYYY, h:mm:ss a');

const meetingsSchema = new Schema({


        agenda: {
          type: String,
          required: [true, "Please Enter Meetings Agenda"],
          // maxLength: [30, "Name cannot exceed 30 characters"],
          // minLength: [4, "Name should have more than 4 characters"],
        },
      
        date: {
          type: String,
          default: now,
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
          type: String,
          default: now,
        },
        updateAt:{
            type: String,
            default: now,
          },
        
      
      });{timestamps:true};
      
    
    
    const meetingsModel=mongoose.model("Meetings", meetingsSchema);

  module.exports = meetingsModel;