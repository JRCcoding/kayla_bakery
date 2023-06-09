import mongoose from 'mongoose'

const requestSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    formType: { type: String, required: false },
    size: { type: String, required: false },
    qty: { type: String, required: false },
    date: { type: String, required: false },
    additional: { type: String, required: false },
    name: { type: String, required: false },
    email: { type: String, required: false },
    number: { type: String, required: true },
    price: { type: String, required: false },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

const Request = mongoose.model('Request', requestSchema)

export default Request
