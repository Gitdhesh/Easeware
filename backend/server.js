import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import componentRoutes from './routes/components.js'
import contactRoutes from './routes/contact.js'   // ✅ REQUIRED

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// ROUTES
app.use('/api/components', componentRoutes)
app.use('/api/contact', contactRoutes)            // ✅ REQUIRED

// DATABASE
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err))

app.get('/', (req, res) => {
  res.send('EASEWARE backend is running')
})

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

