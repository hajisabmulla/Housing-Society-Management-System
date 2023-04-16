const mongoose = require('mongoose');

const { Schema } = mongoose;


const societyMemberSchema = new Schema({

        fname: {
          type: String,
          required: [true, "Please Enter Your fname"],
          // maxLength: [30, "Name cannot exceed 30 characters"],
          // minLength: [4, "Name should have more than 4 characters"],
        },
        lname: {
          type: String,
          required: [true, "Please Enter Your lname"],
          // maxLength: [30, "Name cannot exceed 30 characters"],
          // minLength: [4, "Name should have more than 4 characters"],
        },
      
        username: {
          type: String,
          required: [true, "Please Enter Your username"],
          // maxLength: [30, "Name cannot exceed 30 characters"],
          
          // minLength: [4, "Name should have more than 4 characters"],
        },
        address: {
          type: String,
          required: [true, "Please Enter Your address"],
        //   maxLength: [30, "Name cannot exceed 30 characters"],
        //   minLength: [10, "Name should have more than 4 characters"],
          
        },
        password: {
          type: String,
          required: [true, "Please Enter Your Password"],
          // minLength: [6, "Password should be greater than 8 characters"],
          // select: false,
        },
      
        contactNo: {
          type: String,
          required: [true, "Please Enter Your Contact No"],
          // minLength: [10, "Contact should be 10 characters"],
        },
        
        createdAt: {
          type: Date,
          default: Date.now,
        },
        updateAt:{
            type: Date,
            default: Date.now,
          },
        
      
      },
      {timestamps:true}
      
);
    
    const societyMemberModel=mongoose.model("SocietyMember", societyMemberSchema);


  
  
  

  module.exports = societyMemberModel;