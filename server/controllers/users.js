import User from '../models/user.js'
import Token from '../models/token.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

/* signup */
export const signup = async (req, res, next) => {
    try {
        let {firstname, lastname, email, password, confirmpassword} = req.body
        
        if (!firstname || !lastname || !email || !password || !confirmpassword) {
            res.status(400).json({message: 'Empty!'})
            return
        }

        const emailExists = await User.findOne({email})
        if (emailExists) {
            res.status(400).json({message: 'Already exist!'})
            return
        }

        if (password !== confirmpassword) {
            res.status(400).json({message: 'Not same!'})
            return
        }

        const bcryptpass = await bcrypt.hash(password, 10)
        const user = await User.create({
            name: firstname.concat(' ', lastname),
            email,
            password: bcryptpass
        })

        const accesstoken = jwt.sign(
            {id: user._id, email: user.email},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '15s'}
        )

        const refreshtoken = jwt.sign(
            {id: user._id, email: user.email},
            process.env.REFRESH_TOKEN_SECRET
        )

        await Token.create({
            userId: user._id,
            refreshtoken
        })

        res.cookie('token', refreshtoken, {
            httpOnly: true,
            //secure: true,
            sameSite: 'strict'
        })
        res.status(200).json({user: {...user._doc, accesstoken}, message: 'Singup!'})
    } catch (err) {
        res.status(500).json({message: err})
    }
}

/* signin */
export const signin = async (req, res, next) => {
    try {
        const {email, password} = req.body

        if (!email || !password) 
            return res.status(404).json({message: 'Emty!'})

        const user = await User.findOne({email})
        if (!user)
            return res.status(404).json({message: 'Wrong email or password!'})

        const bcryptpass = await bcrypt.compare(password, user.password)
        if (!bcryptpass)
            return res.status(404).json({message: 'Wrong email or password!'})

        const accesstoken = jwt.sign(
            {id: user._id, email: user.email},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '15s'}
        )

        const refreshtoken = jwt.sign(
            {id: user._id, email: user.email},
            process.env.REFRESH_TOKEN_SECRET
        )

        await Token.findOneAndUpdate(
            {userId: user._id},
            {refreshtoken},
            {new: true}
        )

        res.cookie('token', refreshtoken, {
            httpOnly: true,
            //secure: true,
            sameSite: 'strict'
        })
        res.status(200).json({user: {...user._doc, accesstoken}, message: 'Signin!'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

/* logout */
export const logout = async (req, res, next) => {
    try {
        const {id} = req.params

        res.clearCookie('token')

        await Token.findOneAndUpdate(
            {userId: id},
            {refreshtoken: null},
            {new: true}
        )
        res.status(200).json({message: 'Logout!'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

/* refresh */
export const refresh = async (req, res, next) => {
    try {
        const {id} = req.params
        const cookie = req.cookies.token

        const {refreshtoken} = await Token.findOne({userId: id})
        if (!refreshtoken) 
            res.sendStatus(401)

        if (!cookie)
            res.sendStatus(403)

        if (cookie !== refreshtoken)
            res.sendStatus(401)

        const verifiedRefreshtoken = jwt.verify(
            refreshtoken,
            process.env.REFRESH_TOKEN_SECRET     
        )

        const accesstoken = jwt.sign(
            {id: verifiedRefreshtoken.id, email: verifiedRefreshtoken.email},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '15s'}
        )

        res.status(200).json(accesstoken)
    } catch (err) {
        console.log(err)
    }
}