import express from 'express'
import * as mnn  from '../controllers/memories.js'
import auth from '../middleware/auth.js'

const routerMemories = express.Router()

routerMemories.get('/', mnn.getAll)
routerMemories.get('/:id', mnn.getOne)
routerMemories.post('/', auth, mnn.createOne)
routerMemories.put('/:id', auth, mnn.updateOne)
routerMemories.delete('/:id', auth, mnn.deleteOne)

export default routerMemories