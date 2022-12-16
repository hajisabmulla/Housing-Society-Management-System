const express = require('express');
const router = express.Router();
const SocietyMember = require('../models/SocietyMembers');
const Chairman = require('../models/Chairman');
const Secretary = require('../models/Secretary');
const Treasurer = require('../models/Treasurer');
const Meetings = require('../models/Meetings')




const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchsocietymembers = require('../Middleware/fetchsocietyMembers');
const fetchchairman = require('../Middleware/fetchchairman');
const fetchsecretary = require('../Middleware/fetchsecretary');
const fetchtreasurer = require('../Middleware/fetchtreasurer');



const { json } = require('express');
const JWT_SECRET = 'Samiisgoodb$oy';



// Society Members router

//ROUTE 1: create a user using :Post "/api/auth/createuser". No login require
router.post('/SocietyMembers', [
    body('fname', 'Enter a valid fname').isLength({ min: 4 }),
    body('lname', 'Enter a valid lname').isLength({ min: 4 }),
    body('username', 'Enter a valid username').isLength({min: 4}),
    body('address', 'Enter a valid address').isLength({ min: 10 }),
    body('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
    body('contactNo', 'Enter a valid contactNo').isLength({ min: 10 }),
], async (req, res) => {
    let success = false;
    // if there are errors return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
    }
    // Check wheather the user with this username already exist
    try {

        let societyMember = await SocietyMember.findOne({ username: req.body.username });
        if (societyMember) {
            return res.status(400).json({success, error: "Sorry a user with this UserName already exist" })
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password,salt); 
        societyMember = await SocietyMember.create({
            fname: req.body.fname,
            lname: req.body.lname,
            username: req.body.username,
            address: req.body.address,
            password: secPass,
            contactNo: req.body.contactNo,
        })
        //   .then(user => res.json(user))
        //   .catch(err=>{console.log(err)
        //     res.json({error: 'Please enter a unique value for email', message: err.message})});

        const data={
            societyMember :
            {
                id : societyMember.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        

        // res.json(user)
        success = true;
        res.json({ success,authToken})

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})


// ROUTE 2: Authenticate user using :Post "/api/auth/login". No login require
router.post('/login', [
   
    body('username', 'Enter a valid email').isLength(),
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
         let societyMember = await SocietyMember.findOne({username});
         if(!societyMember){
            success= false;
             return  res.status(400).json({success, error:"Username in not valid Please try to login with correct credentials"});
         }

         const passwordCompare = await bcrypt.compare(password,societyMember.password);
         if(!passwordCompare){
             success= false;
            return  res.status(400).json({success ,error:" Password Incorrect Please try to login with correct credentials"});
         }

         const data={
            societyMember :
            {
                id : societyMember.id
            }
        }
        
        const authToken = jwt.sign(data, JWT_SECRET);
        success= true;
        res.json({success, authToken})
     
     } 
     catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 3: Get loggedin user details using :Post "/api/auth/getuser". login require
router.post('/getsocietymembers',fetchsocietymembers,async (req, res) => {


try {
    const societyMemberId = req.SocietyMember.id;
    const societyMember = await SocietyMember.findById(societyMemberId).select("-password")
    res.send(societyMember)
    
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
        res.send({message:"Society Member Updated Successfully"});
    })


})

router.delete("/SocietyMembers/:id",(req,res)=>{
    SocietyMember.findByIdAndDelete(req.params.id)
    .then((info)=>{
        res.send({message:"Society Member Deleted Successfully"});
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

        let chairman = await Chairman.findOne({ username: req.body.username });
        if (chairman) {
            return res.status(400).json({success, error: "Sorry a user with this UserName already exist" })
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password,salt); 
        chairman = await Chairman.create({
          
            name: req.body.name,
            username: req.body.username,
            
            password: secPass,
           
        })
        //   .then(user => res.json(user))
        //   .catch(err=>{console.log(err)
        //     res.json({error: 'Please enter a unique value for email', message: err.message})});

        const data={
            chairman :
            {
                id : chairman.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        

        // res.json(user)
        success = true;
        res.json({ success,authToken})

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
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

     const {username,password} = req.body;
     try {
         let chairman = await Chairman.findOne({username});
         if(!chairman){
            success= false;
             return  res.status(400).json({success, error:"Username in not valid Please try to login with correct credentials"});
         }

         const passwordCompare = await bcrypt.compare(password,chairman.password);
         if(!passwordCompare){
             success= false;
            return  res.status(400).json({success ,error:" Password Incorrect Please try to login with correct credentials"});
         }

         const data={
                chairman :
            {
                id : chairman.id
            }
        }
        
        const authToken = jwt.sign(data, JWT_SECRET);
        success= true;
        res.json({success, authToken})
     
     } 
     catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 3: Get loggedin user details using :Post "/api/auth/getuser". login require
router.post('/getchairman',fetchchairman,async (req, res) => {


try {
    const chairmanId = req.Chairman.id;
    const chairman = await Chairman.findById(chairmanId).select("-password")
    res.send(chairman)
    
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
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

        let secretary = await Secretary.findOne({ username: req.body.username });
        if (secretary) {
            return res.status(400).json({success, error: "Sorry a user with this UserName already exist" })
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password,salt); 
        secretary = await Secretary.create({
          
            name: req.body.name,
            username: req.body.username,
            
            password: secPass,
           
        })
        //   .then(user => res.json(user))
        //   .catch(err=>{console.log(err)
        //     res.json({error: 'Please enter a unique value for email', message: err.message})});

        const data={
            secretary :
            {
                id : secretary.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        

        // res.json(user)
        success = true;
        res.json({ success,authToken})

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
         let secretary = await Secretary.findOne({username});
         if(!secretary){
            success= false;
             return  res.status(400).json({success, error:"Username in not valid Please try to login with correct credentials"});
         }

         const passwordCompare = await bcrypt.compare(password,secretary.password);
         if(!passwordCompare){
             success= false;
            return  res.status(400).json({success ,error:" Password Incorrect Please try to login with correct credentials"});
         }

         const data={
                secretary :
            {
                id : secretary.id
            }
        }
        
        const authToken = jwt.sign(data, JWT_SECRET);
        success= true;
        res.json({success, authToken})
     
     } 
     catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 3: Get loggedin user details using :Post "/api/auth/getuser". login require
router.post('/getsecretary',fetchsecretary,async (req, res) => {


try {
    const secretaryId = req.secretary.id;
    const secretary = await Secretary.findById(secretaryId).select("-password")
    res.send(secretary)
    
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

        let treasurer = await Treasurer.findOne({ username: req.body.username });
        if (treasurer) {
            return res.status(400).json({success, error: "Sorry a user with this UserName already exist" })
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password,salt); 
        treasurer = await Treasurer.create({
          
            name: req.body.name,
            username: req.body.username,
            
            password: secPass,
           
        })
        //   .then(user => res.json(user))
        //   .catch(err=>{console.log(err)
        //     res.json({error: 'Please enter a unique value for email', message: err.message})});

        const data={
            treasurer :
            {
                id : treasurer.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        

        // res.json(user)
        success = true;
        res.json({ success,authToken})

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
         let treasurer = await Treasurer.findOne({username});
         if(!treasurer){
            success= false;
             return  res.status(400).json({success, error:"Username in not valid Please try to login with correct credentials"});
         }

         const passwordCompare = await bcrypt.compare(password,treasurer.password);
         if(!passwordCompare){
             success= false;
            return  res.status(400).json({success ,error:" Password Incorrect Please try to login with correct credentials"});
         }

         const data={
                treasurer :
            {
                id : treasurer.id
            }
        }
        
        const authToken = jwt.sign(data, JWT_SECRET);
        success= true;
        res.json({success, authToken})
     
     } 
     catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 3: Get loggedin user details using :Post "/api/auth/getuser". login require
router.post('/gettreasurer',fetchtreasurer,async (req, res) => {


try {
    const treasurerId = req.treasurer.id;
    const treasurer = await Treasurer.findById(treasurerId).select("-password")
    res.send(treasurer)
    
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
})





// const Razorpay = require('razorpay');
// const PORT = process.env.PORT || 8000;
// const config = require('config');


// const instance = new Razorpay({
//     key_id : config.get('key_id'),
//     key_secret : config.get('key_secret')
// })

// router.post('/order', (req,res) => {
//     try{
//         const options = {
//             amount: req.body.amount * 100, // amount == Rs 10
//             currency: "INR",
//             receipt: "receipt#1",
//             payment_capture: 1
//         };
//         instance.orders.create(options, async (err, order) => {
//             if (err) {
//               return res.status(500).json({
//                 message: "Something Went Wrong",
//               });
//             }
//           return res.status(200).json(order);
//         });
//     }
//     catch (err) {
//         return res.status(500).json({
//           message: "Something Went Wrong",
//         });
//     }
// })


module.exports = router