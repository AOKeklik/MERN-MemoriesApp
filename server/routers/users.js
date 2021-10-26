import express from 'express'
import {signup,signin,logout,refresh} from '../controllers/users.js'

const routerUser = express.Router()

routerUser.post('/signup', signup)
routerUser.post('/signin', signin)
routerUser.get('/logout/:id', logout)
routerUser.get('/refresh/:id', refresh)

export default routerUser