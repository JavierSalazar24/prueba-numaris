import { Router } from 'express'
import { getEvents, getUnits } from '../controllers/index.js'

const router = Router()

router.get('/units', getUnits)
router.get('/events/:id', getEvents)

export default router
