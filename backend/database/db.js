const mongoose = require('mongoose')
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://rataprim:7RD4Wp4VVoIJN7ts@mean.ydx8sgn.mongodb.net/')
        console.log('MongoDB connected. :-)')
      } catch (err) {
        console.log('Failed to connect to MongoDB', err)
      }
}
//connectDB()
module.exports = connectDB;