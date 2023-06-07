import express from 'express'
import {
  addRequestItems,
  getMyRequests,
  getRequestById,
  getRequests,
  updateRequestToDelivered,
  updateRequestToPaid,
} from '../controllers/requestController.js'
import { admin, protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router
  .route('/')
  .post(protect, addRequestItems)
  .get(protect, admin, getRequests)
router.route('/myrequests').get(protect, getMyRequests)
router.route('/:id').get(protect, getRequestById)
router.route('/:id/pay').put(updateRequestToPaid, admin)
router.route('/:id/deliver').put(protect, admin, updateRequestToDelivered)

export default router
