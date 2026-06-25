import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    const MongoDB = process.env.MONGO_URI;

    if (!MongoDB) {
      throw new Error("MONGODB_DB is not defined in .env");
    }

    const conn = await mongoose.connect(MongoDB);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
   
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;