const mongoose = require('mongoose');
const { Schema } = mongoose;
const moment = require('moment');

let now = moment().format('MMMM Do YYYY, h:mm:ss a');


const ManageExpensesSchema = new Schema({
  

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
       
        
         
        
        createdAt: {
          type: String,
          default: now,
        },
        updateAt:{
            type: String,
            default: now,
          },
        
      
      });{timestamps: true};
      
    
    
    const manageExpensesModel=mongoose.model("ManageExpenses", ManageExpensesSchema);

  module.exports = manageExpensesModel;