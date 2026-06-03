import express from 'express'
import Contact from '../models/Contact.js'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    console.log('📩 Incoming contact data:', req.body)

    const contact = new Contact(req.body)
    await contact.save()

    console.log('✅ Saved to DB')
    res.status(201).json({ success: true })
  } catch (error) {
    console.error('❌ CONTACT SAVE ERROR:', error)
    res.status(500).json({ success: false, error: error.message })
  }
})

export default router

