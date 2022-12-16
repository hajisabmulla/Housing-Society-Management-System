const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Samiisgoodb$oy';

const  fetchchairman = (req, res, next)=>{
    //Get the user from jwt token and add it to req object

    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please authenticate using a valid token"})
    }

    try {
        const data = jwt.verify(token,JWT_SECRET );
        req.Chairman = data.Chairman;
        next();
        
    } catch (error) {
        res.status(401).send({error:"Please authenticate using a valid token"})
    }
   
}

module.exports = fetchchairman;