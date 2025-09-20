import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import { clerkWebhook, stripeWebhooks } from './controllers/webhooks.js'
import educatorRouter from './routes/educatorRoutes.js'
import { clerkMiddleware } from '@clerk/express'
import connectCloudinary from './config/cloudinary.js'
import courseRouter from './routes/courseRoute.js'
import userRouter from './routes/userRoutes.js'

//intialize expresss
const app = express()
   
//connect db
await connectDB()
await connectCloudinary()

//middleware
app.use(cors())
app.use(clerkMiddleware())

//route
app.get('/', (req, res) => {
    res.send('api is running bro')
})

app.post('/clerk',express.json(),clerkWebhook)
app.use('/api/educator',express.json(),educatorRouter)
app.use('/api/course',express.json(),courseRouter)
app.use('/api/user',express.json(),userRouter)
app.post('/stripe',express.raw({type:'application/json'}),stripeWebhooks)

//port
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})

