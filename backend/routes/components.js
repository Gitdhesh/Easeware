import express from 'express'
import Component from '../models/Component.js'

const router = express.Router()

// GET all components
router.get('/', async (req, res) => {
  try {
    const components = await Component.find()
    res.json(components)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// POST new component
router.post('/', async (req, res) => {
  const { name, category, description } = req.body

  try {
    const newComponent = new Component({
      name,
      category,
      description
    })

    const savedComponent = await newComponent.save()
    res.status(201).json(savedComponent)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

export default router
