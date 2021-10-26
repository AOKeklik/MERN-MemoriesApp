import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieparser from 'cookie-parser'

dotenv.config()

mongoose.connect(process.env.MONGODB_URL || `mongodb://localhost:27017/memoriesapp`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const app = express()

app.use(express.json({ limit: '20mb' }))
app.use(express.urlencoded({ extended: true }))

/* cookie */
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(cookieparser())

/* middleware */
import posttrimmer from './middleware/posttrimmer.js'
app.use(posttrimmer)

/* routers */
import routerMemories from './routers/memories.js'
import routerUser from './routers/users.js'
app.use('/memories', routerMemories)
app.use('/user', routerUser)

app.listen(process.env.PORT || 5000, () => console.log(`Server ${process.env.PORT} Portunda Calisiyor..`))