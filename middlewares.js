const authenticate = (req, res, next) => {
    console.log(req.query.api_key)
    if(req.query.api_key && req.query.api_key === "abc"){
        next()
    } else {
        res.json("Sorry you are not authorized")
    }
    
}

export {authenticate}