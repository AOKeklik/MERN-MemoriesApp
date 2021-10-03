import express from 'express'
import * as mnn  from '../controllers/memories.js'

const routerMemories = express.Router()

routerMemories.get('/', mnn.getAll)

export default routerMemories