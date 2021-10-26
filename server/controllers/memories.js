import mongoose from 'mongoose'
import Memory from '../models/memory.js'


export const getAll = async (req, res, next) => {
    try {
        const data = await Memory.find()
        res.status(200).json(data)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const getOne = async (req, res, next) => {
    try {
        const id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(id))
            res.status(404).json({ message: 'Memory Id Is Not Valid!' })

        const data = await Memory.findById(id)
        res.status(200).json(data)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const createOne = async (req, res, next) => {
    try {
        const createrId = req.createrId

        const formData = req.body
        const newData = await Memory.create({...formData, createrId})
        res.status(201).json({newData, message: 'New Data has been created.'})
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

export const updateOne = async (req, res, next) => {
    try {
        const id = req.params.id
        const createrId = req.createrId

        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).json({message: 'Memory Id Is Not Valid!'})

        const memory = await Memory.findById(id)
        if (memory.createrId !== createrId)
            return res.status(403).json({message: 'Update Forbidden!'})

        const {title, content, image, creator} = req.body
        const updateData = await Memory.findByIdAndUpdate(id, {_id: id, title, content, image, creator}, {new: true})
        res.status(200).json({updateData, message: 'The Data has been updated.'})
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

export const deleteOne = async (req, res, next) => {
    try {
        const id = req.params.id
        const createrId = req.createrId

        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).json({message: 'Memory Id Is Not Valid!'})

        const memory = await Memory.findById(id)
        if (memory.createrId !== createrId)
            return res.status(403).json({message: 'Delete Forbidden!'})

        await Memory.findByIdAndDelete(id)
        res.status(200).json({message: 'Memory Has Been Deleted'})
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}