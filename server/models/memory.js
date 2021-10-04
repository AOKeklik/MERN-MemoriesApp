import mongoose from 'mongoose'

const MemorySchema = new mongoose.Schema({
    //createrId: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    image: {type: String},
    creator: {type: String, required: true},
    createdAt: {type: Date, default: new Date()},
}, 
{ timestamps: true })

const Memory = new mongoose.model('memo', MemorySchema)

export default Memory