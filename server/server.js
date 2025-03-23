import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import { clerkWebhook } from './controllers/webhooks.js'

//intialize express
const app = express()

//connect db
await connectDB()

//middleware
app.use(cors())

//route
app.get('/', (req, res) => {
    res.send('api is running bro')
})

app.post('/clerk',express.json(),clerkWebhook)

//port
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
