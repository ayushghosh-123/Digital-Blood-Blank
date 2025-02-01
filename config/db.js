import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`connected to Mongodb Database ${mongoose.connection.host}`)
    } catch (error) {
        console.log(`Monodb connection error: ${error.message}`);
    }
}

export default connectDB;

