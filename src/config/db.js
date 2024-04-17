import mongoose from "mongoose";

const MONGO_URL = "mongodb+srv://rafael3041220219:Casterfiler25@@cluster0.m9fchhq.mongodb.net/";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connect mongoDB");
  } catch (err) {
    console.log(err);
  }
};
