import mongoose from 'mongoose'

const requestSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'User',
    },
    // requestItems: [
    //   {
    formType: { type: String, required: false },
    size: { type: String, required: false },
    flavor: { type: String, required: false },
    qty: { type: String, required: false },
    date: { type: String, required: false },
    additional: { type: String, required: false },
    name: { type: String, required: false },
    email: { type: String, required: false },
    number: { type: String, required: false },
    // qty: { type: Number, required: true },
    // image: { type: String, required: true },
    // price: { type: Number, required: true },
    // flavor: { type: String, required: false },
    // product: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'Product',
    // },
    // },
    // ],
    // shippingAddress: {
    //   address: { type: String, required: true },
    //   city: { type: String, required: true },
    //   postalCode: { type: String, required: true },
    //   country: { type: String, required: true },
    // },
    // paymentMethod: {
    //   type: String,
    //   required: true,
    // },
    // paymentResult: {
    //   id: { type: String },
    //   status: { type: String },
    //   update_time: { type: String },
    //   email_address: { type: String },
    // },
    // taxPrice: {
    //   type: Number,
    //   required: true,
    //   default: 0.0,
    // },
    // shippingPrice: {
    //   type: Number,
    //   required: true,
    //   default: 0.0,
    // },
    // totalPrice: {
    //   type: Number,
    //   required: true,
    //   default: 0.0,
    // },
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
