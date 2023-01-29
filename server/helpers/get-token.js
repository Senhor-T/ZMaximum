const getToken = (req) =>{
    const authHeader = req.headers.authorization
    const token = authHeader.slipt(" ")[1]
    
    return token
}

module.exports = getToken