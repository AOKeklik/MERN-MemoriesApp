import mongoose from 'mongoose'
import Memory from '../models/memory.js'

export const getAll = async (req, res, next) => {
    try {
        const datas = await Memory.find()
        res.status(200).json(datas)
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
        const formData = req.body
        const newData = await Memory.create(formData)
        res.status(201).json({newData, message: 'New Data has been created.'})
    } catch (err) {
        res.json({ message: err.message })
    }
}

export const updateOne = async (req, res, next) => {
    try {
        const id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(id))
            res.status(404).json({message: 'Memory Id Is Not Valid!'})

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
        if (!mongoose.Types.ObjectId.isValid(id))
            res.status(200).json({message: 'Memory Id Is Not Valid!'})

        await Memory.findByIdAndDelete(id)
        res.status(200).json({message: 'Memory Has Been Deleted'})
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}