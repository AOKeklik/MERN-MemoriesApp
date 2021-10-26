import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    try {
        const accesstoken = req.headers.authorization?.split(' ')[1]
        
        let verifiedAccesstoken

        if (accesstoken) {
            verifiedAccesstoken = jwt.verify(
                accesstoken,
                process.env.ACCESS_TOKEN_SECRET
            )

            req.createrId = verifiedAccesstoken.id
        }
    

        // console.log(req.createrId)
        // console.log(accesstoken)
        
        next()
    } catch (err) {
        console.log(err)
    }
}

export default auth