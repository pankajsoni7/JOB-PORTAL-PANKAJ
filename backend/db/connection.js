import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB is connected successfully');
    } catch (error) {
        console.log('Failed to connect', error);
    }
}
export default connectDB;