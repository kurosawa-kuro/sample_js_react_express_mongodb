import mongoose from 'mongoose'

const connectDB = (url) => {
  // return mongoose.connect('mongodb+srv://user1234:user1234@cluster0.ipo4k.mongodb.net/tutorial')
  return mongoose.connect('mongodb+srv://tutorial:tutorial@cluster0.xyck8sr.mongodb.net/?retryWrites=true&w=majority')
}
export default connectDB
