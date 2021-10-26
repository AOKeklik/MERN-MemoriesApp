import mongoose from 'mongoose'

const MemorySchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    image: {type: String},
    creator: {type: String, required: true},
    createdAt: {type: Date, default: new Date()},
    createrId: {type: String, required: true}
}, 
{ timestamps: true })

const Memory = new mongoose.model('memo', MemorySchema)

export default Memory