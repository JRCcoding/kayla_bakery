import asyncHandler from 'express-async-handler'
import Request from '../models/requestModel.js'

// @desc    Create new request
// @route   POST /api/requests
// @access  Private
const addRequestItems = asyncHandler(async (req, res) => {
  const { formType, size, flavor, qty, date, additional, name, email, number } =
    req.body

  if (!formType) {
    res.status(400)
    throw new Error('No formType submitted.')
    return
  } else {
    const request = new Request({
      user: req.user._id,
      formType,
      size,
      flavor,
      qty,
      date,
      additional,
      name,
      email,
      number,
    })

    const createdRequest = await request.save()

    res.status(201).json(createdRequest)
  }
})

// @desc    Get request by ID
// @route   GET /api/requests/:id
// @access  Private
const getRequestById = asyncHandler(async (req, res) => {
  const request = await Request.findById(req.params.id).populate(
    'user',
    'name email'
  )

  if (request) {
    res.json(request)
  } else {
    res.status(404)
    throw new Error('Request not found')
  }
})

// @desc    Update request to paid
// @route   GET /api/requests/:id/pay
// @access  Private
const updateRequestToPaid = asyncHandler(async (req, res) => {
  const request = await Request.findById(req.params.id)

  if (request) {
    request.isPaid = true
    request.paidAt = Date.now()
    request.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
    }

    const updatedRequest = await request.save()

    res.json(updatedRequest)
  } else {
    res.status(404)
    throw new Error('Request not found')
  }
})
// // @desc    Update request price
// // @route   GET /api/requests/:id/price
// // @access  Admin
const updateRequestPrice = async (req, res) => {
  try {
    const { id } = req.params
    const { price } = req.body

    // Find the request by id and update the price value
    const request = await Request.findById(id)
    if (request) {
      request.price = price
      const updatedRequest = await request.save()
      res.json(updatedRequest)
    } else {
      res.status(404).json({ message: 'Request not found' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc    Update request to delivered
// @route   GET /api/requests/:id/deliver
// @access  Private/Admin
const updateRequestToDelivered = asyncHandler(async (req, res) => {
  const request = await Request.findById(req.params.id)

  if (request) {
    request.isDelivered = true
    request.deliveredAt = Date.now()

    const updatedRequest = await request.save()

    res.json(updatedRequest)
  } else {
    res.status(404)
    throw new Error('Request not found')
  }
})

// @desc    Get logged in user requests
// @route   GET /api/requests/myrequests
// @access  Private
const getMyRequests = asyncHandler(async (req, res) => {
  const requests = await Request.find({ user: req.user._id })
  res.json(requests)
})

// @desc    Get all requests
// @route   GET /api/requests
// @access  Private/Admin
const getRequests = asyncHandler(async (req, res) => {
  const requests = await Request.find({}).populate('user', 'id name')
  res.json(requests)
})

export {
  addRequestItems,
  getRequestById,
  updateRequestToPaid,
  updateRequestToDelivered,
  getMyRequests,
  getRequests,
  updateRequestPrice,
}
