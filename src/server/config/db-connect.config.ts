import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {

        if (!process.env.MONGODB_URI) {
            console.error("MONGODB_URI is not defined in environment variables.");
            process.exit(1);
        }

        const connect = await mongoose.connect(process.env.MONGODB_URI)

        console.log(`MongoDB connected successfully.`);

    } catch (error) {
        if (error instanceof mongoose.Error) {
            console.error("Mongoose Error: ", error.message);
        } else {
            console.error("Error connecting to database: ", error);
        }

        process.exit(1)
    }
}

export default connectToDatabase