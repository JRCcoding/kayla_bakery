import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () => {
  const URI = process.env.MONGO_URI
  try {
    const conn = await mongoose.connect(URI)

    console.log(`MongoDB Connected: ${conn.connection.host}`.brightGreen)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
