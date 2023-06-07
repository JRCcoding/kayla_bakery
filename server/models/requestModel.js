import mongoose from 'mongoose'

const requestSchema = mongoose.Schema(
  {
    formType: { type: String, required: false },
    size: { type: String, required: false },
    qty: { type: String, required: false },
    date: { type: String, required: false },
    additional: { type: String, required: false },
    name: { type: String, required: false },
    email: { type: String, required: false },
    number: { type: String, required: false },
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
