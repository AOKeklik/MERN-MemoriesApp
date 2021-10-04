import express from 'express'
import * as mnn  from '../controllers/memories.js'

const routerMemories = express.Router()

routerMemories.get('/', mnn.getAll)
routerMemories.get('/:id', mnn.getOne)
routerMemories.post('/', mnn.createOne)
routerMemories.put('/:id', mnn.updateOne)
routerMemories.delete('/:id', mnn.deleteOne)

export default routerMemories