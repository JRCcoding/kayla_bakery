import express from 'express'
const router = express.Router()
import {
  addRequestItems,
  getRequestById,
  updateRequestToPaid,
  updateRequestToDelivered,
  getMyRequests,
  getRequests,
} from '../controllers/requestController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router
  .route('/')
  .post(protect, addRequestItems)
  .get(protect, admin, getRequests)
router.route('/myrequests').get(protect, getMyRequests)
router.route('/:id').get(protect, getRequestById)
router.route('/:id/pay').put(updateRequestToPaid, admin)
router.route('/:id/deliver').put(protect, admin, updateRequestToDelivered)

export default router
