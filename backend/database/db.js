const mongoose = require('mongoose')

// mongoose.Promise = global.Promise 
//connect to local mongodb
// This is not done (The beginning of ep#3)

// const connectDB = async () => {
//     //mongoose.set('strictQuery', true);
//     const conn = await mongoose.connect('mongodb://localhost:27017/TaskManager');
//     console.log('MongoDB Connected :-)');
// }

// mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true}).then(() => {
//     console.log('MongoDB Connected :)')
// }).catch((e) => {
//     console.log("MongoDB Connection Failed")
//     console.log(e)
// })
// mongoose.set('useCreateIndex', true)
// mongoose.set('useFindAndModify', false)
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://rataprim:7RD4Wp4VVoIJN7ts@mean.ydx8sgn.mongodb.net/')
        console.log('MongoDB connected!')
      } catch (err) {
        console.log('Failed to connect to MongoDB', err)
      }
}
//connectDB()
module.exports = connectDB;