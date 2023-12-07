import mongoose from "mongoose";

const connectDB = async () => {
    try {

        const db = await mongoose.connect('mongodb://127.0.0.1:27017/TouristPlace' , {
useNewUrlParser: true,
        });

    
    } catch (error) {
        console.log('error: ${error.message}');
        process.exit(1);
    }
};
export default connectDB;