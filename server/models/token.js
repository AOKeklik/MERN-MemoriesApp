import mongoose from 'mongoose'

const tokenSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    refreshtoken: {type: String}
}, {timestamps: true})

const Token = new mongoose.model('token', tokenSchema)

export default Token