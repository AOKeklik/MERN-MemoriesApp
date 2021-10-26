import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    try {
        const accesstoken = req.headers.authorization?.split(' ')[1]
        
        const googleExists = accesstoken.length > 500
        let verifiedAccesstoken

        if (accesstoken && !googleExists) {
            verifiedAccesstoken = jwt.verify(
                accesstoken,
                process.env.ACCESS_TOKEN_SECRET
            )
            req.createrId = verifiedAccesstoken.id
        } else {
            verifiedAccesstoken = jwt.decode(accesstoken)
            req.createrId = verifiedAccesstoken.sub
        }
    

        // console.log(req.createrId)
        // console.log(accesstoken)
        
        next()
    } catch (err) {
        console.log(err)
    }
}

export default auth