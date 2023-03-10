const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Samiisgoodb$oy';

const  fetchtreasurer = (req, res, next)=>{
    //Get the user from jwt token and add it to req object

    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please authenticate using a valid token"})
    }

    try {
        const data = jwt.verify(token,JWT_SECRET );
        req.Treasurer = data.Treasurer;
        next();
        
    } catch (error) {
        res.status(401).send({error:"Please authenticate using a valid token"})
    }
   
}

module.exports = fetchtreasurer;