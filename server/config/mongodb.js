import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/lms`);

        console.log("Connected to MongoDB");

        mongoose.connection.on("error", (err) => {
            console.error("MongoDB Connection Error:", err);
        });
    } catch (error) {
        console.error("MongoDB Connection Failed:", error);
        process.exit(1);
    }
};

export default connectDB;
