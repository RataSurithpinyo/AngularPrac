const mongoose = require('mongoose')
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://rataprim:crI2BtYW8mJ2Npze@cluster0.3egivnj.mongodb.net/')
        console.log('Database is connected.\nHappy coding (and debugging)! Have a nice day :-)')
      } catch (err) {
        console.log('Failed to connect to MongoDB', err)
      }
}
//connectDB()
module.exports = connectDB;