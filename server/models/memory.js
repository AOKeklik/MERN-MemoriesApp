import mongoose from 'mongoose'

const MemorySchema = new mongoose.Schema({
    //createrId: {type: String, require: true},
    title: {type: String, require: true},
    content: {type: String, require: true},
    image: {type: String},
    createdAt: {type: Date, default: new Date()},
}, 
{ timestamps: true })

const Memory = new mongoose.model('memo', MemorySchema)

export default Memory