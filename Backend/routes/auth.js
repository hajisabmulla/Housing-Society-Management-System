const express = require('express');
const router = express.Router();
const SocietyMember = require('../models/SocietyMembers');
const Chairman = require('../models/Chairman');
const Secretary = require('../models/Secretary');
const Treasurer = require('../models/Treasurer');
const Meetings = require('../models/Meetings')



const AnnualFee = require('../models/Fees')
const MonthlyFee = require('../models/MonthlyFees')
const OneTimeFee = require('../models/OneTimeFees')

const ManageExpenses = require("../models/ManageExpenses")

const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');


const alert = require('alert');

const { json } = require('express');




// Society Members router

//ROUTE 1: create a user using :Post "/api/auth/createuser". No login require
router.post('/SocietyMembers', [
    body('fname', 'Enter a valid fname').isLength({ min: 4 }),
    body('lname', 'Enter a valid lname').isLength({ min: 4 }),
    body('username', 'Enter a valid username').isLength({min: 4}),
    body('address', 'Enter a valid address').isLength({ min: 4 }),
    body('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
    body('contactNo', "Enter a valid contactNo").isLength({ min: 10 }),
], async (req, res) => {
    let success = false;
    // if there are errors return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
    }
    // Check wheather the user with this username already exist
    try {

        let societyMembers = await SocietyMember.findOne({ username: req.body.username });
        if (societyMembers) {
            return res.status(400).json({success, error: alert("Sorry a user with this UserName already exist") })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password,salt); 
        const newSocietyMember = await SocietyMember.create({
            fname: req.body.fname,
            lname: req.body.lname,
            username: req.body.username,
            address: req.body.address,
            password: hashedPass,
            contactNo: req.body.contactNo,
        })
        //   .then(user => res.json(user))
        //   .catch(err=>{console.log(err)
        //     res.json({error: 'Please enter a unique value for email', message: err.message})});

       const societyMember = newSocietyMember.save();
       res.status(200).json(societyMember);
        

       

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})


// ROUTE 2: Authenticate user using :Post "/api/auth/login". No login require
router.post('/login', [
   
    body('username', 'Enter a valid username').isLength(),
    body('password', 'Password cannot be blank').exists(),
    
], async (req, res) => {
    let success = false;
     // if there are errors return Bad request and the errors
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
     }

    //  const {username,password} = req.body;
     try {
         let societyMember = await SocietyMember.findOne({username: req.body.username});
         if(!societyMember){
            success= false;
            
             return  res.status(400).json({success, error:alert("Username in not valid Please try to login with correct credentials")});
         }

         const passwordCompare = await bcrypt.compare(req.body.password,societyMember.password);
         if(!passwordCompare){
             success= false;
            return  res.status(400).json({success ,error:alert(" Password Incorrect Please try to login with correct credentials")});
         }

         
         const { password, ...SocietyMembers } = societyMember._doc;
         success = true;
         res.status(200).json(SocietyMembers);
     
     } 
     catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 3: Get loggedin user details using :Post "/api/auth/getuser". login require
router.get('/SocietyMembers/:id',async (req, res) => {


try {
    const societyMember =await SocietyMember.findById(req.params.id);
   const { password, ...others} = societyMember._doc;
    res.status(200).json(others);
    
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
})


// to get society member and display in chairman account to perform operation like update ,read and delete

router.get("/SocietyMembers",async (req,res)=>{
    let SocietyMembers=await SocietyMember.find();
    res.send(SocietyMembers);
})

router.get("/SocietyMembers/:username",async (req,res)=>{
  let SocietyMembers=await SocietyMember.find();
  res.send(SocietyMembers);
})


router.put("/SocietyMembers/:id",(req,res)=>{

    SocietyMember.findByIdAndUpdate(req.params.id,req.body)
    .then((info)=>{
        res.send({message:("Society Member Updated Successfully")});
    })


})

router.delete("/SocietyMembers/:id",(req,res)=>{
    SocietyMember.findByIdAndDelete(req.params.id)
    .then((info)=>{
        res.send({message:("Society Member Deleted Successfully")});
    })

})






// Chairman Router


//ROUTE 1: create a user using :Post "/api/auth/createChairman". No login require
router.post('/Chairman', [
    
    body('name', 'Enter a valid name').isLength({ min: 4 }),
    body('username', 'Enter a valid username').isLength({min: 4}),
   
    body('password', 'Password must be at least 6 characters').isLength({ min: 6 }),

], async (req, res) => {
    let success = false;
    // if there are errors return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
    }
    // Check wheather the user with this email already exist
    try {

        let chairmans = await Chairman.findOne({ username: req.body.username });
        if (chairmans) {
            return res.status(400).json({success, error: alert("Sorry a user with this UserName already exist") })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password,salt); 
        const newChairman = await Chairman.create({
          
            name: req.body.name,
            username: req.body.username,
            
            password: hashedPass,
           
        })
        
    const chairman = await newChairman.save();
    res.status(200).json(chairman);

        

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured", error);
    }
})


// ROUTE 2: Authenticate user using :Post "/api/auth/login". No login require
router.post('/ChairmanLogin', [
   
    body('username', 'Enter a valid username').isLength(),
    body('password', 'Password cannot be blank').exists(),
    
], async (req, res) => {
    let success = false;
     // if there are errors return Bad request and the errors
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
     }

    //  const {username,password} = req.body;
     try {
         let chairman = await Chairman.findOne({username: req.body.username});
         if(!chairman){
            success= false;
             return  res.status(400).json({success, error:alert("Username in not valid Please try to login with correct credentials")});
         }

         const passwordCompare = await bcrypt.compare(req.body.password, chairman.password);
         if(!passwordCompare){
             success= false;
            return  res.status(400).json({success ,error:alert(" Password Incorrect Please try to login with correct credentials")});
         }

         const { password, ...Chairmans } = chairman._doc;
         success = true;
         res.status(200).json(Chairmans);
     } 
     catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 3: Get loggedin user details using :Post "/api/auth/getuser". login require
router.post('/Chairman/:id',async (req, res) => {


try {
    const chairman = await Chairman.findById(req.params.id);
    const { password, ...others } = chairman._doc;
    res.status(200).json(others);
    
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
})

// for the Annual fees paid by the society members

router.post("/AnnualFees",[ 
    body('type', 'Enter a valid type').isLength({ min: 1 }),
    body('amount', 'Enter a valid amount').isLength({ min:  1}),
    body('username', 'Enter a valid username').isLength({ min: 1 }),
    body('address', 'Enter a valid address').isLength({ min:  1}),
    ],(req,res)=>{
    AnnualFee.create(req.body)
    .then((user)=>{
        res.send({message:"fees paid",user})
    })
})


router.get("/AnnualFees",async (req,res)=>{
    let Annualfees = await AnnualFee.find();
    res.send(Annualfees);
})

router.get("/AnnualFees/:type",async (req,res)=>{
  let Annualfee=await AnnualFee.find();
  res.send(Annualfee);
})


router.put("/AnnualFees/:id",(req,res)=>{

    AnnualFee.findByIdAndUpdate(req.params.id,req.body)
    .then((info)=>{
        res.send({message:"MonthlyFees Updated Successfully"});
    })


})

router.delete("/AnnualFees/:id",(req,res)=>{
    AnnualFee.findByIdAndDelete(req.params.id)
    .then((info)=>{
        res.send({message:"MonthlyFees Deleted Successfully"});
    })

})


// for the monthly fees paid by the society members

router.post("/MonthlyFees",(req,res)=>{
    MonthlyFee.create(req.body)
    .then((user)=>{
        res.send({message:"fees paid",user})
    })
})


router.get("/MonthlyFees",async (req,res)=>{
    let monthlyfees=await MonthlyFee.find();
    res.send(monthlyfees);
})

router.get("/MonthlyFees/:fees type",async (req,res)=>{
  let monthlyfees=await MonthlyFee.find();
  res.send(monthlyfees);
})


router.put("/MonthlyFees/:id",(req,res)=>{

    MonthlyFee.findByIdAndUpdate(req.params.id,req.body)
    .then((info)=>{
        res.send({message:"MonthlyFees Updated Successfully"});
    })


})

router.delete("/MonthlyFees/:id",(req,res)=>{
    MonthlyFee.findByIdAndDelete(req.params.id)
    .then((info)=>{
        res.send({message:"MonthlyFees Deleted Successfully"});
    })

})


// for the one time fees paid by the society members

router.post("/OneTimeFees",(req,res)=>{
    OneTimeFee.create(req.body)
    .then((user)=>{
        res.send({message:"fees paid",user})
    })
})


router.get("/OneTimeFees",async (req,res)=>{
    let onetimefees =await OneTimeFee.find();
    res.send(onetimefees);
})

router.get("/OneTimeFees/:fees type",async (req,res)=>{
  let onetimefee=await OneTimeFee.find();
  res.send(onetimefee);
})


router.put("/OneTimeFees/:id",(req,res)=>{

    OneTimeFee.findByIdAndUpdate(req.params.id,req.body)
    .then((info)=>{
        res.send({message:"OneTimeFees Updated Successfully"});
    })


})

router.delete("/OneTimeFees/:id",(req,res)=>{
    OneTimeFee.findByIdAndDelete(req.params.id)
    .then((info)=>{
        res.send({message:"OneTimeFees Deleted Successfully"});
    })

})




// code for Manage Expenses and perform operation like read and update delete


router.post("/ManageExpenses",[ 
    body('type', 'Enter a valid type').isLength({ min: 1 }),
    body('amount', 'Enter a valid amount').isLength({ min:  1}),
    ],(req,res)=>{
    ManageExpenses.create(req.body)
    .then((user)=>{
        res.send({message:"Expense Paid",user})
    })
})


router.get("/ManageExpenses",async (req,res)=>{
    let Expenses=await ManageExpenses.find();
    res.send(Expenses);
})

router.get("/ManageExpenses",async (req,res)=>{
  let Expenses=await ManageExpenses.find();
  res.send(Expenses);
})


router.put("/ManageExpenses/:id",(req,res)=>{

    ManageExpenses.findByIdAndUpdate(req.params.id,req.body)
    .then((info)=>{
        res.send({message:"ManageExpenses Updated Successfully"});
    })


})

router.delete("/ManageExpenses/:id",(req,res)=>{
    ManageExpenses.findByIdAndDelete(req.params.id)
    .then((info)=>{
        res.send({message:"ManageExpenses Deleted Successfully"});
    })

})




// Secretary Router



//ROUTE 1: create a user using :Post "/api/auth/createChairman". No login require
router.post('/Secretary', [
    
    body('name', 'Enter a valid name').isLength({ min: 4 }),
    body('username', 'Enter a valid username').isLength({min: 4}),
   
    body('password', 'Password must be at least 6 characters').isLength({ min: 6 }),

], async (req, res) => {
    let success = false;
    // if there are errors return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
    }
    // Check wheather the user with this username already exist
    try {

        let secretarys = await Secretary.findOne({ username: req.body.username });
        if (secretarys) {
            return res.status(400).json({success, error: alert("Sorry a user with this UserName already exist" )})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password,salt); 
        const newSecretary = await Secretary.create({
          
            name: req.body.name,
            username: req.body.username,
            
            password: hashedPass,
           
        })
        const secretary = await newSecretary.save();
        res.status(200).json(secretary);
       

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})


// ROUTE 2: Authenticate user using :Post "/api/auth/login". No login require
router.post('/SecretaryLogin', [
   
    body('username', 'Enter a valid username').isLength(),
    body('password', 'Password cannot be blank').exists(),
    
], async (req, res) => {
    let success = false;
     // if there are errors return Bad request and the errors
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
     }

     const {username,password} = req.body;
     try {
         let secretary = await Secretary.findOne({username: req.body.username});
         if(!secretary){
            success= false;
             return  res.status(400).json({success, error:alert("Username in not valid Please try to login with correct credentials")});
         }

         const passwordCompare = await bcrypt.compare(req.body.password,secretary.password);
         if(!passwordCompare){
             success= false;
            return  res.status(400).json({success ,error:alert(" Password Incorrect Please try to login with correct credentials")});
         }

         const { password, ...Secretarys } = secretary._doc;
         success = true;
         res.status(200).json(Secretarys);
     
     } 
     catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 3: Get loggedin user details using :Post "/api/auth/getuser". login require
router.post('/Secretary/:id',async (req, res) => {


try {
    const secretary = await Secretary.findById(req.params.id);
    const { password, ...others } = secretary._doc;
    res.status(200).json(others);
    
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
})

// ROUTE 4: To add meetings and manage meetings


router.post("/Meetings",[ 
    body('agenda', 'Enter a valid agenda').isLength({ min: 4 }),
    body('date', 'Enter a valid date').isLength({ min:  1}),
    body('time', 'Enter a valid time').isLength({min: 1}),
    body('place', 'Enter a valid place').isLength({min: 1})],async(req,res)=>{
    Meetings.create(req.body)
    .then((user)=>{
        res.send({message:"Meetings Created",user})
    })
})


router.get("/Meetings",async (req,res)=>{
    let meetings=await Meetings.find();
    res.send(meetings);
})

router.get("/Meetings/:agenda",async (req,res)=>{
  let meetings=await Meetings.find();
  res.send(meetings);
})


router.put("/Meetings/:id",(req,res)=>{

    Meetings.findByIdAndUpdate(req.params.id,req.body)
    .then((info)=>{
        res.send({message:"Meeting Updated Successfully"});
    })


})

router.delete("/Meetings/:id",(req,res)=>{
    Meetings.findByIdAndDelete(req.params.id)
    .then((info)=>{
        res.send({message:"Meeting Deleted Successfully"});
    })

})







// Secretary Router



//ROUTE 1: create a user using :Post "/api/auth/createChairman". No login require
router.post('/Treasurer', [
    
    body('name', 'Enter a valid name').isLength({ min: 4 }),
    body('username', 'Enter a valid username').isLength({min: 4}),
   
    body('password', 'Password must be at least 6 characters').isLength({ min: 6 }),

], async (req, res) => {
    let success = false;
    // if there are errors return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
    }
    // Check wheather the user with this email already exist
    try {

        let treasurers = await Treasurer.findOne({ username: req.body.username });
        if (treasurers) {
            return res.status(400).json({success, error: alert("Sorry a user with this UserName already exist") })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password,salt); 
        const newTreasurer = await Treasurer.create({
          
            name: req.body.name,
            username: req.body.username,
            
            password: hashedPass,
           
        })
        const treasurer = await newTreasurer.save();
        res.status(200).json(treasurer);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})


// ROUTE 2: Authenticate user using :Post "/api/auth/login". No login require
router.post('/TreasurerLogin', [
   
    body('username', 'Enter a valid username').isLength(),
    body('password', 'Password cannot be blank').exists(),
    
], async (req, res) => {
    let success = false;
     // if there are errors return Bad request and the errors
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
     }

     const {username,password} = req.body;
     try {
         let treasurer = await Treasurer.findOne({username: req.body.username});
         if(!treasurer){
            success= false;
             return  res.status(400).json({success, error:alert("Username in not valid Please try to login with correct credentials")});
         }

         const passwordCompare = await bcrypt.compare(req.body.password,treasurer.password);
         if(!passwordCompare){
             success= false;
            return  res.status(400).json({success ,error:alert("Password Incorrect Please try to login with correct credentials")});
         }

         const { password, ...Treasurers } = treasurer._doc;
         success = true;
         res.status(200).json(Treasurers);
     
     } 
     catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 3: Get loggedin user details using :Post "/api/auth/getuser". login require
router.post('/Treasurer/:id',async (req, res) => {


try {
    const treasurer = await  Treasurer.findById(req.params.id);
    const { password, ...others } = treasurer._doc;
    res.status(200).json(others);
    
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
})





module.exports = router